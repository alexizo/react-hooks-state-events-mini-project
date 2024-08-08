import React, { useState } from 'react';

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0] || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onTaskFormSubmit) {
      onTaskFormSubmit({ text, category });
    }
    setText('');
    setCategory(categories[0] || '');
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Enter task details"
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
