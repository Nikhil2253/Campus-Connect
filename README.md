<h1 align="center">🌐 Campus Connect</h1>
<p align="center">
  🚀 A Full-Stack College Communication Platform <br/>
  🏆 <strong>3rd Place Winner</strong> – Inter-College Hackathon 2025
</p>

---

### ✨ Overview

> **Campus Connect** is a cutting-edge college dashboard platform that redefines campus communication.  
Built during a 36-hour hackathon, it connects students, teachers, and admins in real-time — combining learning, announcements, placements, and collaboration into one sleek ecosystem.

---

### ⚡ Core Features

#### 💬 1. Real-Time Chat System
- 🔹 One-on-one and Group chat
- 🔹 Live conversation between students and teachers
- 🔹 Built using WebSockets for smooth performance

#### 🏫 2. Smart Classroom Module
- 🧑‍🏫 Teachers can **create classrooms** with a name & join code
- 📁 Share **files, images, videos, or text materials**
- 📝 Built-in **MCQ Test System** with:
  - Countdown timer ⏳
  - Auto evaluation ✅
  - Dual visibility of results (teacher + student)

#### 📣 3. Events & Notices Hub
- 📅 View **upcoming college events** and urgent announcements
- ✍️ Generate event descriptions with **AI-powered content**
- 📌 Neatly centralized dashboard for all notices

#### 💼 4. Placement Cell
- 🔍 Explore **real-time job openings** with one click
- 📢 Post and manage **on-campus drive announcements**
- 🎯 Built for student discovery and admin ease

#### 📝 5. Student Blogging System
- ✒️ Write and publish blogs with **tagging & editing**
- 📚 Promote student voices and ideas
- 🛠️ Implemented mid-hackathon as a challenge feature

#### 🛡️ 6. Powerful Admin Dashboard
- 🔐 Access limited to **5 secure admin accounts**
- 👥 Remove users, moderate content, post announcements
- 🎛️ Control panel for healthy & safe digital campus space

---

### 🧠 Tech Stack

| Layer       | Tools Used                            |
|-------------|----------------------------------------|
| Frontend    | React.js, Axios, CSS Modules           |
| Backend     | Node.js, Express.js                    |
| Database    | MongoDB (Mongoose ORM)                 |
| Realtime    | Socket.IO for chat                     |
| Auth        | JWT-based role authentication          |
| AI Feature  | OpenAI API (Event content generation)  |
| UI Design   | Figma, Photoshop                       |

---

### 👨‍👨‍👦‍👦 Team Contributions

| 💻 Member           | 👨‍💼 Role & Responsibility                                                |
|---------------------|-------------------------------------------------------------------------|
| **Nikhil Saxena**   | System Design, Real-Time Chat, Admin Panel, Debugging                  |
| **Nitin Saxena**    | Classroom System, Placement Cell, MCQ Test Logic                       |
| **Ronak Varshney**  | Events & Notices Module, AI Integration, Blog System                  |
| **Pratham Gupta**   | UI/UX Designer – Figma & Photoshop                                     |

---

### 🚀 Live Demo or Setup

> *(If deployed: add link here)*  
Otherwise, run locally:

```bash
# Clone the repo
git clone https://github.com/Nikhil2253/Campus-Connect.git
cd Campus-Connect

# Backend Setup
cd backend
npm install
npm run dev

# Frontend Setup
cd ../frontend
npm install
npm start
