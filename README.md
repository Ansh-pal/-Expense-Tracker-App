# Expense Tracker App

## Project Overview

Expense Tracker is a full-stack mobile app where users can register, log in, and manage their personal expenses. It includes JWT-based authentication, protected expense APIs, and a React Native (Expo) app with expense summary insights.

## Tech Stack

- Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs
- Mobile App: React Native, Expo, Expo Router, Context API, AsyncStorage, Axios
- Tooling: concurrently for running backend and mobile app together

## Project Structure

- backend: Express + MongoDB API server
- mobile-app: React Native Expo application
- package.json (root): single command startup for backend and mobile app
- README.md (root): setup and run guide

## Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local instance or cloud connection string)
- Expo CLI support via npx

## Setup Instructions

1. Clone and enter the project folder.

2. Install root dependencies.

```bash
npm install
```

3. Install backend dependencies.

```bash
cd backend
npm install
cd ..
```

4. Install mobile app dependencies.

```bash
cd mobile-app
npm install
cd ..
```

## Environment Variables

Create backend env file at backend/.env:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/expense-tracker
JWT_SECRET=your_secure_secret
```

Optional (already supported by backend):

```env
JWT_EXPIRES_IN=7d
```

For the Expo app, create mobile-app/.env if needed:

```env
EXPO_PUBLIC_API_URL=http://10.0.2.2:5000/api
```

## Run the App

From the root folder, run:

```bash
npm start
```

This single command starts:

- Backend server from backend
- Expo mobile app from mobile-app

## API Endpoints

| Method | Endpoint | Protected | Description |
| --- | --- | --- | --- |
| POST | /api/auth/register | No | Register a new user |
| POST | /api/auth/login | No | Login and receive JWT token |
| GET | /api/expenses | Yes | Get all expenses for logged-in user |
| POST | /api/expenses | Yes | Create a new expense |
| PUT | /api/expenses/:id | Yes | Update an existing expense |
| DELETE | /api/expenses/:id | Yes | Delete an expense |
| GET | /api/expenses/summary/category | Yes | Get total and category-wise summary |

Authorization header format:

```http
Authorization: Bearer <token>
```

## Screenshots

Add screenshots here:

- Login Screen (placeholder)
- Register Screen (placeholder)
- Dashboard Screen (placeholder)
- Add Expense Screen (placeholder)
- Edit Expense Screen (placeholder)
# Expense-Tracker-App
