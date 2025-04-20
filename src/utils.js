// Priority & Status reference arrays for sorting/filtering
export const PRIORITY_OPTIONS = ["Urgent", "High", "Medium", "Low"];
export const STATUS_OPTIONS = ["Not Started", "In Progress", "Completed"];

// Sorting function — sorts tasks based on selected method
export const sortTasks = (tasks, method) => {
  const sorted = [...tasks]; // Don't mutate original list

  switch (method) {
    case "titleAsc":
      sorted.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "titleDesc":
      sorted.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "dueDateAsc":
      sorted.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      break;
    case "dueDateDesc":
      sorted.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
      break;
    case "priority":
      sorted.sort(
        (a, b) =>
          PRIORITY_OPTIONS.indexOf(a.priority) -
          PRIORITY_OPTIONS.indexOf(b.priority)
      );
      break;
    default:
      break;
  }

  return sorted;
};

export const filterTasks = (tasks, filters, searchTerm = "") => {
  const { status, priority } = filters;

  return tasks.filter((task) => {
    const matchStatus = status ? task.status === status : true;
    const matchPriority = priority ? task.priority === priority : true;
    const matchSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });
};
