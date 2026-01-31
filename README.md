# 🚀 HRMS Lite – Human Resource Management System

A lightweight **full-stack HR management application** built to manage **employee records** and **daily attendance tracking** through a clean and professional web interface.

This project simulates a basic internal HR tool and demonstrates end-to-end full-stack development, including **API design, database integration, validations, and deployment**.

---

## 🌐 Live Application

🔗 **Frontend:** https://your-frontend-url.vercel.app  
🔗 **Backend API:** https://your-backend-url.onrender.com/api  

---

## 📌 Project Overview

HRMS Lite allows an admin to:

### 👩‍💼 Employee Management
- ➕ Add new employees  
- 📄 View all employees  
- ❌ Delete employees  
- ✅ Validates required fields & email format  
- 🔁 Prevents duplicate employee IDs  

### 🗓 Attendance Management
- 📝 Mark employee attendance (Present / Absent)  
- 📅 Filter attendance by date *(Bonus)*  
- 📊 View attendance history per employee  
- ⭐ Display total present days *(Bonus)*  

### 📊 Dashboard (Bonus)
- 👥 Total employees count  
- 🗂 Total attendance records summary  

---

## 🛠 Tech Stack

### 🎨 Frontend
- ⚛️ React.js  
- 🌐 Axios (API calls)  
- 🧭 React Router  
- 🎯 Responsive & clean UI  

### ⚙️ Backend
- 🟢 Node.js  
- 🚂 Express.js  
- 🗄 MongoDB Atlas (Cloud Database)  
- 🔐 Mongoose ODM  

### ☁️ Deployment
- ▲ Vercel – Frontend Hosting  
- 🚀 Render – Backend Hosting  
- 🌍 MongoDB Atlas – Database  

---

## 🧩 Application Architecture

```
React Frontend (Vercel)
        │
        ▼
Node/Express API (Render)
        │
        ▼
MongoDB Atlas (Cloud DB)
```

---

## 🖼 Application Snapshots

### 👩‍💼 Employee Management  
_Add, view and delete employees_

![Employees Page](./screenshots/employees.png)

### 🗓 Attendance Tracking  
_Mark and filter attendance records_

![Attendance Page](./screenshots/attendance.png)

### 📊 Dashboard  
_Quick HR statistics overview_

![Dashboard](./screenshots/dashboard.png)

*(You can add screenshots in a `/screenshots` folder and update paths if needed)*

---

## 💻 Steps to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/hrms-lite.git
cd hrms-lite
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside **backend/**

```
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5050
```

Run backend:

```bash
npm run dev
```

Backend runs at:  
👉 http://localhost:5050/api

---

### 3️⃣ Frontend Setup

Open new terminal:

```bash
cd frontend
npm install
```

Create `.env` inside **frontend/**

```
REACT_APP_API=http://localhost:5050/api
```

Run frontend:

```bash
npm start
```

Frontend runs at:  
👉 http://localhost:3000

---

## ✅ Validations & Error Handling

✔ Required field validation  
✔ Email format validation  
✔ Duplicate employee prevention  
✔ Invalid ID handling  
✔ Proper HTTP status codes  
✔ Meaningful error messages  

---

## ⚠️ Assumptions & Limitations

- 👤 Single admin user (no authentication implemented)  
- 💰 Payroll, leave management, and advanced HR features are out of scope  
- 📈 Designed as a lightweight HR tool for demonstration purposes  
- 🕒 Attendance is recorded once per day per employee (not shift-based)

---

## 🌟 Bonus Features Implemented

✔ Filter attendance by date  
✔ Total present days per employee  
✔ Dashboard summary with employee & attendance counts  

---

## 📬 Submission Checklist

- ✅ Live frontend deployed  
- ✅ Backend API deployed  
- ✅ Public GitHub repository  
- ✅ Functional, production-ready application  

---

### 💡 Author

**Sagar Chauhan**  
Full Stack Developer | MERN Stack Enthusiast 🚀
