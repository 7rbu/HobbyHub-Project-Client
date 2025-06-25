# HobbyHub – Local Hobby Group Organizer

**🔗 Live Demo:** https://assignment-papaya.web.app/

---

## 📌 Overview

**HobbyHub** is a dynamic platform where users can discover, join, and create hobby-based groups. Whether it's art, reading, cooking, or any passion, HobbyHub connects like-minded individuals through an organized and user-friendly interface.

---

## 🌟 Key Features

### 🏠 Home Page
- Hero slider banner
- Six featured groups of the day
- Animated statistics using CountUp
- "Why People Love HobbyHub" testimonial section

### 📂 All Groups
- Browse all user-created groups
- Public access without login

### ➕ Create Group (Private Route)
- Create new groups with full hobby details
- Firebase pre-fills user name and email

### 👤 My Groups (Private Route)
- View all groups created by the logged-in user

### 🔍 Group Details Page (Private Route)
- Complete group information
- Join Group functionality:
  - **Future start date** → shows `Join Successful` (toast)
  - **Expired group** → shows `Group no longer active`

### 🌗 Theme Mode
- Toggle between Dark and Light themes
- Built with Tailwind CSS + DaisyUI

---

## 🔐 Route Structure

| Path             | Access    | Description                   |
|------------------|-----------|-------------------------------|
| `/`              | Public    | Home page                     |
| `/all-group`     | Public    | View all groups               |
| `/create`        | Private   | Create a new group            |
| `/my-group`      | Private   | View user-created groups      |
| `/details/:id`   | Private   | Group details and join option |

> 🔒 Private routes require login via Firebase Authentication

---

## 🧰 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- DaisyUI

### Routing & State
- React Router
- Context API

### Authentication
- Firebase Auth

### Database
- MongoDB (via backend API)

### UI & UX Enhancements
- Swiper (sliders)
- SweetAlert2 (alerts)
- React CountUp (animation)
- React Tooltip
- React Spinners
- React Icons
- React Awesome Reveal

### Utilities
- date-fns (date handling)

---

## ✅ Project Highlights

- Fully responsive and mobile-first
- Clean and reusable components
- Dark/Light mode support
- Real-time group interaction
- Firebase + MongoDB integration
- Full CRUD functionality


