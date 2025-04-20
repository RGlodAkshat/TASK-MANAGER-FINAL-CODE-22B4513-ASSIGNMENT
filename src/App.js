import React, { useState, useEffect, useRef } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import {
  sortTasks,
  filterTasks,
  PRIORITY_OPTIONS,
  STATUS_OPTIONS,
} from "./utils";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [sortMethod, setSortMethod] = useState("dueDateAsc");
  const [filters, setFilters] = useState({ status: "", priority: "" });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editableTask, setEditableTask] = useState(null);

  const formRef = useRef(null); // <-- Added useRef here for form scrolling

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Effect to scroll the form into view when editableTask is set
  useEffect(() => {
    if (editableTask) {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [editableTask]);

  const handleFormSubmit = (task) => {
    if (editableTask) {
      updateTask(task);
      setEditableTask(null);
    } else {
      addTask(task);
    }
  };

  const addTask = (task) => setTasks([...tasks, task]);

  const updateTask = (updatedTask) =>
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );

  const deleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  const toggleCompletion = (taskId) =>
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "Completed" ? "Not Started" : "Completed",
            }
          : task
      )
    );

  const processedTasks = sortTasks(
    filterTasks(tasks, filters, searchTerm),
    sortMethod
  );

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      <div className={`app-container ${isDarkMode ? "dark" : "light"}`}>
        {/* Header Section */}
        <header className="header">
          <nav>
            <div className="leftHeader">
              <h1 className="company-name">Hushh</h1>
            </div>
            <div className="rightHeader">
              <ul>
                <li>
                  <a href="#Title">Create Task</a>
                </li>
                <li>
                  <a href="#searching">View Task</a>
                </li>
                <li>
                  <a href="#footer">About</a>
                </li>
              </ul>
            </div>
            {/* Theme toggle */}
          </nav>
        </header>

        {/* Theme Toggle Button */}
        <div className="DarkMode">
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {isDarkMode ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
          </button>
        </div>

        <h1 id="Title" className="Title">
          Task Manager
        </h1>

        {/* Task Form - Wrapped in a div with formRef */}
        <div ref={formRef}>
          <TaskForm
            onAdd={handleFormSubmit}
            editableTask={editableTask}
            setEditableTask={setEditableTask}
          />
        </div>

        {/* Sort & Filter Section */}
        <div className="sort-filter-section">
          <div>
            <label>Sort By: </label>
            <select
              value={sortMethod}
              onChange={(e) => setSortMethod(e.target.value)}
            >
              <option value="titleAsc">Title (A-Z)</option>
              <option value="titleDesc">Title (Z-A)</option>
              <option value="dueDateAsc">Due Date (Soonest First)</option>
              <option value="dueDateDesc">Due Date (Latest First)</option>
              <option value="priority">Priority (Urgent → Low)</option>
            </select>
          </div>

          <div>
            <label>Status: </label>
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
            >
              <option value="">All</option>
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Priority: </label>
            <select
              value={filters.priority}
              onChange={(e) =>
                setFilters({ ...filters, priority: e.target.value })
              }
            >
              <option value="">All</option>
              {PRIORITY_OPTIONS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div id="searching" className="search-container">
          <h2> Find Task :</h2>
          <input
            className="search-input"
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Task List */}
        <TaskList
          tasks={processedTasks}
          onUpdate={(task) => setEditableTask(task)}
          onDelete={deleteTask}
          onToggleCompletion={toggleCompletion}
          isDarkMode={isDarkMode}
        />
      </div>

      {/* Footer Section */}
      <footer className="footer" id="footer">
        <div className="footer-container">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>📞 Contact Us</h3>
            <p>Phone: +91 7827732128</p>
            <p>
              Email:{" "}
              <a href="mailto:ak8akshat@gmail.com">ak8akshat@gmail.com</a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="social-links">
            <h3>🌐 Follow Us</h3>
            <a
              href="https://www.linkedin.com/in/akshat-kumar-771a72210/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="https://www.svgrepo.com/show/448234/linkedin.svg"
                alt="LinkedIn"
                className="social-icon"
              />
              LinkedIn
            </a>
            <a
              href="https://github.com/RGlodAkshat"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt="GitHub"
                className="social-icon"
              />
              GitHub
            </a>
            <a
              href="https://www.instagram.com/akshat78277/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                alt="Instagram"
                className="social-icon"
              />
              Instagram
            </a>
          </div>

          {/* Site Info */}
          <div className="site-info">
            <h3>💡 About This Site</h3>
            <p>
              Welcome to Hushh Task Manager which helps you keep track of daily
              tasks
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>
            &copy; 2025 Made By Akshat Kumar 22B4513
            <span className="heart"> &hearts;</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
