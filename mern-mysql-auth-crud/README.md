# MERN MySQL Authentication & CRUD System

## 📖 Overview

This project is a full-stack authentication and user management system built using the MERN stack (MongoDB replaced with MySQL). It implements secure authentication workflows along with complete CRUD functionality and a responsive dashboard interface.

---

## ✨ Key Features

* 🔐 Secure User Authentication (Login/Register)
* 🔑 Password Hashing using bcrypt
* 🔁 Forgot Password & Reset Token Mechanism
* 📊 User Dashboard Interface
* 🧾 Full CRUD Operations (Create, Read, Update, Delete)
* ⚡ RESTful API Architecture
* 🎯 Client-Server Communication using Axios
* 🛡️ Input Validation & Error Handling

---

## 🏗️ System Architecture

* **Frontend**: React.js (Functional Components + Hooks), Tailwind CSS
* **Backend**: Node.js, Express.js (REST API)
* **Database**: MySQL (Relational Schema)
* **Communication**: Axios (HTTP Client)

---

## 🗂️ Project Structure

```
mern-mysql-auth-crud/
│── backend/        # Express server & APIs
│── frontend/       # React application
│── screenshots/    # UI previews
│── database.sql    # MySQL schema
│── README.md
│── .gitignore
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/Sangeetabrathod/mern-mysql-auth-crud.git
cd mern-mysql-auth-crud
```

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=mern_auth_db
JWT_SECRET=your_secret_key
```

Start server:

```
npm start
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

### 4️⃣ Database Setup

* Open MySQL
* Create database and import:

```
database.sql
```

---

## 🔐 Authentication Flow

1. User registers → password hashed using bcrypt
2. Login → credentials validated + session/token generated
3. Forgot Password → reset token generated and stored
4. Reset → token verified + password updated

---

## 📡 API Endpoints (Sample)

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /api/register  | Register new user |
| POST   | /api/login     | User login        |
| POST   | /api/forgot    | Send reset token  |
| POST   | /api/reset     | Reset password    |
| GET    | /api/users     | Fetch users       |
| PUT    | /api/users/:id | Update user       |
| DELETE | /api/users/:id | Delete user       |

---

## 📸 Screenshots

Refer to the `screenshots/` directory for UI previews.

---

## 🚀 Future Enhancements

* JWT-based authentication
* Role-based access control (RBAC)
* Deployment using cloud platforms (Render / Vercel)
* Email service integration for reset links

---

## 👨‍💻 Author

**Sangeetabrathod**
