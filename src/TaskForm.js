import React, { useState, useEffect } from "react";
import { PRIORITY_OPTIONS, STATUS_OPTIONS } from "./utils";

function TaskForm({ onAdd, editableTask, setEditableTask }) {
  const [form, setForm] = useState({
    id: null,
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    status: "Not Started",
  });

  // 🔁 Whenever editableTask changes, update the form state
  useEffect(() => {
    if (editableTask) {
      setForm(editableTask);
    } else {
      resetForm();
    }
  }, [editableTask]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    const newTask = {
      ...form,
      id: form.id || Date.now(), // if new task, generate ID
    };

    onAdd(newTask);
    setEditableTask(null); // exit edit mode
    resetForm();
  };

  const resetForm = () =>
    setForm({
      id: null,
      title: "",
      description: "",
      priority: "Medium",
      dueDate: "",
      status: "Not Started",
    });

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        name="title"
        placeholder="Task title"
        value={form.title}
        onChange={handleChange}
        required
        className="task-title"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="task-description"
      />

      <div className="task-details-row">
        <select name="priority" value={form.priority} onChange={handleChange}>
          {PRIORITY_OPTIONS.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>

        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
          required
        />

        <select name="status" value={form.status} onChange={handleChange}>
          {STATUS_OPTIONS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <button type="submit">
        {editableTask ? "Update Task ✏️" : "Add Task ➕"}
      </button>
    </form>
  );
}

export default TaskForm;
