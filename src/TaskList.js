import React from "react";
import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  onUpdate,
  onDelete,
  onToggleCompletion,
  isDarkMode,
}) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet 😴</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onUpdate={onUpdate} // Edit
            onDelete={onDelete} // Delete
            onToggleCompletion={onToggleCompletion}
            isDarkMode={isDarkMode}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
