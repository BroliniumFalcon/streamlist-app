import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Import icon

function StreamListForm({ onAddItem }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      onAddItem(inputValue);
      setInputValue(""); // Clear input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="stream-form">
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter movie or show" 
      />
      <button type="submit">
        <FaPlus /> Add
      </button>
    </form>
  );
}

export default StreamListForm;
