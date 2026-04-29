# Mini SaaS Task Management App

Production-ready full stack task management application with secure authentication and multi-user task handling.

---

## Features

### Authentication
- User Signup
- User Login
- Password hashing using bcrypt
- JWT Authentication
- Protected Routes

### Task Management
- Create Tasks
- View only your own tasks
- Update task status (Pending / Completed)
- Delete tasks
- Multi-user user-task relationship

### Frontend
- React
- Tailwind CSS
- API Integration
- Persistent login using localStorage

### Backend
- Node.js
- Express
- Sequelize ORM
- PostgreSQL
- Error handling middleware
- Input validation

---

## Tech Stack

Frontend
- React
- Tailwind CSS

Backend
- Node.js
- Express.js
- Sequelize
- PostgreSQL

Authentication
- JWT
- bcrypt

Deployment
- Vercel
- Render

---

## Project Structure

```bash
task-manager-saas/
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/task-manager-saas.git
cd task-manager-saas
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000
DB_URI=your_postgres_connection_string
JWT_SECRET=your_secret_key
```

Run backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## API Endpoints

### Auth

POST `/api/auth/signup`

```json
{
 "email":"user@test.com",
 "password":"123456"
}
```

POST `/api/auth/login`

```json
{
 "email":"user@test.com",
 "password":"123456"
}
```

---

## Tasks

GET

```http
GET /api/tasks
```

POST

```http
POST /api/tasks
```

```json
{
"title":"Complete Assignment"
}
```

PUT

```http
PUT /api/tasks/:id
```

```json
{
"status":"COMPLETED"
}
```

DELETE

```http
DELETE /api/tasks/:id
```

---

## Screenshots
(Add screenshots here if needed)

---

## Security
- Passwords hashed with bcrypt
- JWT protected APIs
- User-specific task isolation
- Protected routes

---

## Future Improvements
- Due dates
- Task priorities
- Search and filters
- Team collaboration
- Email reminders

---

## Author

Your Name

GitHub:
https://github.com/yourusername
