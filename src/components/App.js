import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  const filteredTasks = selectedCategory === "All" 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        onCategoryChange={handleCategoryChange} 
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={handleTaskFormSubmit} 
      />
      <TaskList 
        tasks={filteredTasks} 
        onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
}

export default App;
