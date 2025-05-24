Assignment-10_category_Papaya
🎯 HobbyHub – Local Hobby Group Organizer
🔗 Live Demo: https://assignment-papaya.web.app/

📌 Overview
HobbyHub is a platform where users can discover, join, and create hobby-based groups. It helps people connect over shared interests like art, reading, cooking, and more — all in one organized, user-friendly space.

🌟 Key Features
🏠 Home Page
Hero slider
6 featured groups of the day
CountUp statistics
“Why People Love HobbyHub” section

📂 All Groups
Browse all user-created groups
Publicly accessible

➕ Create Group (Private)
Create a group with full details (hobby type, meeting location, etc.)
User name/email auto-filled from Firebase

👤 My Groups (Private)
View groups created by the logged-in user
🔍 Details Page (Private)
Full group information

Join Group button
✅ If start date is in the future → show "Join Successful" (Toast alert)
❌ If the group has expired → show "Group no longer active"
🌗 Dark & Light Mode
Toggle between themes using Tailwind + DaisyUI

🔐 Route Access
Route Access
/ (Home) Public
/all-group Public
/create Private
/my-group Private
/details/:id Private

🔒 Private routes require user to be logged in via Firebase Auth.

🧰 Tech Stack
Frontend: React, Tailwind CSS, DaisyUI
Routing: React Router
Authentication: Firebase
Database: MongoDB (via backend)
UI Enhancements:
Swiper, SweetAlert2, React CountUp, React Tooltip, React Spinners, React Icons, React Awesome Reveal
Date Handling: date-fns


✅ Highlights
Fully responsive & mobile-first design
Dark/Light mode support
Real-time user interaction
Clean and reusable components
Full CRUD functionality
Seamless Firebase + MongoDB integration
