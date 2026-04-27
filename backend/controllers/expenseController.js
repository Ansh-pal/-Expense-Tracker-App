const mongoose = require('mongoose');
const Expense = require('../models/Expense');

const parseExpensePayload = ({ amount, category, date, note }) => {
  const parsedAmount = Number(amount);
  const parsedCategory = typeof category === 'string' ? category.trim() : '';
  const parsedDate = date ? new Date(date) : null;

  if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
    return { error: 'Amount must be a number greater than zero' };
  }

  if (!parsedCategory) {
    return { error: 'Category is required' };
  }

  if (!parsedDate || Number.isNaN(parsedDate.getTime())) {
    return { error: 'Date is required and must be valid' };
  }

  return {
    amount: parsedAmount,
    category: parsedCategory,
    date: parsedDate,
    note: typeof note === 'string' ? note.trim() : '',
  };
};

const createExpense = async (req, res, next) => {
  try {
    const validated = parseExpensePayload(req.body);

    if (validated.error) {
      res.status(400);
      throw new Error(validated.error);
    }

    const expense = await Expense.create({
      ...validated,
      userId: req.user._id,
    });

    return res.status(201).json(expense);
  } catch (error) {
    return next(error);
  }
};

const getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.find({ userId: req.user._id }).sort({ date: -1, createdAt: -1 });
    return res.status(200).json(expenses);
  } catch (error) {
    return next(error);
  }
};

const updateExpense = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400);
      throw new Error('Invalid expense id');
    }

    const existing = await Expense.findOne({ _id: id, userId: req.user._id });

    if (!existing) {
      res.status(404);
      throw new Error('Expense not found');
    }

    const validated = parseExpensePayload(req.body);

    if (validated.error) {
      res.status(400);
      throw new Error(validated.error);
    }

    existing.amount = validated.amount;
    existing.category = validated.category;
    existing.date = validated.date;
    existing.note = validated.note;

    const updated = await existing.save();

    return res.status(200).json(updated);
  } catch (error) {
    return next(error);
  }
};

const deleteExpense = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400);
      throw new Error('Invalid expense id');
    }

    const deleted = await Expense.findOneAndDelete({ _id: id, userId: req.user._id });

    if (!deleted) {
      res.status(404);
      throw new Error('Expense not found');
    }

    return res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    return next(error);
  }
};

const getExpenseSummary = async (req, res, next) => {
  try {
    const [totals, byCategory] = await Promise.all([
      Expense.aggregate([
        { $match: { userId: req.user._id } },
        { $group: { _id: null, total: { $sum: '$amount' } } },
      ]),
      Expense.aggregate([
        { $match: { userId: req.user._id } },
        { $group: { _id: '$category', total: { $sum: '$amount' } } },
        { $sort: { total: -1 } },
      ]),
    ]);

    return res.status(200).json({
      totalExpenses: totals[0]?.total || 0,
      categories: byCategory.map((item) => ({
        category: item._id,
        total: item.total,
      })),
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  getExpenseSummary,
};
