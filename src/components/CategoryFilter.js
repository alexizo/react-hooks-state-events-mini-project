import React from "react";


function CategoryFilter({ categories, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

  const handleClick = (category) => {
    setSelectedCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button 
          key={category} 
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
