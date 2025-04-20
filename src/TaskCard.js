import React from "react";
import "./styles.css";

function getCountdown(dueDate) {
  const now = new Date();
  const due = new Date(dueDate);
  const diffInMs = due - now;
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));

  if (diffInDays > 0)
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} left`;
  if (diffInHours > 0)
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} left`;
  if (diffInMinutes > 0)
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} left`;
  return "Due now!";
}

function TaskCard({
  task,
  onUpdate,
  onDelete,
  onToggleCompletion,
  isDarkMode,
}) {
  const countdown = getCountdown(task.dueDate);

  const getDueDateColor = () => {
    const now = new Date();
    const due = new Date(task.dueDate);
    const diffInMs = due - now;

    if (diffInMs <= 0) return "red";
    else if (diffInMs <= 1000 * 60 * 60 * 24) return "orange";
    return "green";
  };

  return (
    <div
      className={`task-card ${isDarkMode ? "dark" : "light"} ${
        task.status === "Completed" ? "completed" : ""
      }`}
    >
      <h3 className="task-title">{task.title}</h3>
      <p className="task-description">{task.description}</p>
      <p className="task-info">
        <strong>Priority:</strong> {task.priority}
      </p>
      <p className="task-info">
        <strong>Due Date:</strong> {new Date(task.dueDate).toLocaleDateString()}
      </p>
      <p className="task-countdown" style={{ color: getDueDateColor() }}>
        <strong>Reminder:</strong> {countdown}
      </p>

      <div className="task-buttons">
        <button
          className={`btn ${
            task.status === "Completed" ? "incomplete-btn" : "complete-btn"
          }`}
          onClick={() => onToggleCompletion(task.id)}
        >
          {task.status === "Completed" ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button className="btn delete-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
        <button
          className="btn edit-btn"
          onClick={() => {
            onUpdate(task);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
