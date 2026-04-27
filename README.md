# Expense Tracker App

A web-based and mobile-ready expense tracking application to manage income and expenses with secure authentication, transaction history, and balance insights.

## Description

Expense Tracker App helps users record daily financial transactions, monitor total balance, and analyze spending categories. The project uses a Node.js and Express backend with MongoDB for data storage, and a React Native (Expo) client that also supports web development mode.

## Features

- User registration and login with JWT authentication
- Add new transactions (income and expense)
- View all transactions in a list
- Edit existing transactions
- Delete transactions
- Category-wise expense summary
- Total expense and balance tracking
- Pull-to-refresh and retry states for better UX
- Form validation for auth and transaction inputs

## Tech Stack

- Frontend: React Native (Expo, Expo Router, Context API)
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Networking: Axios
- Authentication: JSON Web Token (JWT), bcryptjs

## Installation

1. Clone the repository

```bash
git clone https://github.com/Ansh-pal/-Expense-Tracker-App.git
cd expense-tracker-app
```

2. Install root dependencies

```bash
npm install
```

3. Install backend dependencies

```bash
cd backend
npm install
cd ..
```

4. Install mobile client dependencies

```bash
cd mobile-app
npm install
cd ..
```

## Environment Setup

Create a file at backend/.env:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
```

Optional for client API override at mobile-app/.env:

```env
EXPO_PUBLIC_API_URL=http://localhost:5000/api
```

## Run the Project

From the project root:

```bash
npm start
```

This starts both services concurrently:

- Backend API server on port 5000
- Expo development server on port 8081

Alternative commands:

```bash
npm run server
npm run mobile
```

## Folder Structure

```text
expense-tracker-app/
|-- backend/
|   |-- controllers/
|   |-- middleware/
|   |-- models/
|   |-- routes/
|   |-- utils/
|   |-- server.js
|-- mobile-app/
|   |-- app/
|   |-- components/
|   |-- context/
|   |-- screens/
|   |-- services/
|   |-- utils/
|-- package.json
|-- README.md
```

## Screenshots

Add screenshots before submission:

- Login Screen: [Insert image]
- Register Screen: [Insert image]
- Dashboard Screen: [Insert image]
- Add Expense Screen: [Insert image]
- Edit Expense Screen: [Insert image]

## Future Improvements

- Add monthly and yearly analytics charts
- Export transactions to CSV or PDF
- Add budget limits and alerts
- Add dark mode and theme customization
- Add unit and integration tests
- Add CI pipeline for automated checks

## Author

Ansh Pal
