# ⚡ Task Manager App

👨‍💻 **Front-End Engineer Assignment — Hushh.ai**  
📌 Developed by **Akshat Kumar (22B4513, IIT Bombay)**

🔗 **Live Demo:** [taskmanager22b4513.netlify.app](https://taskmanager22b4513.netlify.app/)

---

A clean, responsive, and feature-rich **Task Manager** built using **React and TypeScript**, designed for efficient task organization. The application supports advanced features such as **sorting, filtering, local storage persistence**, and a sleek **dark mode interface**.  
This project was developed as part of the front-end engineering assignment for **Hushh.ai**.

---

## ✅ Assignment Requirements — Fully Implemented

### 📝 Core Functionalities

- Create, edit, and delete tasks  
- Task properties: **Title**, **Description**, **Priority**, **Due Date**, **Status**
- Toggle task status: **Not Started**, **In Progress**, **Completed**
- Visual indicators for task status and due date alerts

### 🔃 Sorting Capabilities

- Sort by **Title** (A–Z / Z–A)  
- Sort by **Due Date** (Earliest to Latest)  
- Sort by **Priority** (Urgent to Low)

### 🔍 Filtering Features

- Filter by **Status** (Not Started, In Progress, Completed)  
- Filter by **Priority** (Urgent, High, Medium, Low)  
- **Multi-filter support** for combined conditions

### 🌚 UI/UX Enhancements

- **Dark Mode / Light Mode** toggle  
- **Responsive design** (Mobile-first approach using Flexbox and Grid)  
- **Priority-based color coding**  
- **Confirmation prompts** before deletion  
- **Tooltips and UX hints** for improved usability

### 💾 Data Persistence

- Tasks stored in **Local Storage**  
- Auto-retrieval of tasks on reload

### 🧪 Bonus Features

- **Due Date Reminder** (e.g., "Due in 2 hours")  
- **Visual cues** for upcoming deadlines  
- **Search bar** to locate tasks by title or description

---

## ⚙️ Tech Stack

- **React 19** with **TypeScript**  
- **React Scripts 5**  
- **Custom CSS** (No external UI libraries)  
- **Local Storage API**  
- **Netlify** for deployment


---

## 🚀 Deployment with Netlify

The project was deployed using [**Netlify**](https://www.netlify.com/) for seamless CI/CD and blazing-fast performance.

### 🧾 Steps I followed:

1. **Build the App:**
This generates a production-ready `build/` folder.

2. **Push to GitHub:**
Make sure your project is on a GitHub repository.

3. **Connect GitHub to Netlify:**
- Go to [Netlify Dashboard](https://app.netlify.com/)
- Click **"Add New Site"** > **"Import from Git"**
- Select your GitHub repo and branch
- Set **build command** to `npm run build` and **publish directory** to `build`

4. **Deploy:**
Netlify will auto-build and deploy your site. It also redeploys on every commit!

---

## 💡 Future Enhancements

- 🔔 **Push Notifications** for upcoming deadlines  
- 📅 **Calendar View** for visual task tracking

---

## ✨ Author

**Akshat Kumar**  
_IIT Bombay (22B4513)_  
