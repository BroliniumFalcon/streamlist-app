import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import StreamListForm from "./StreamListForm";

function StreamList() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("streamlist");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("streamlist", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    const newItems = [...items, { text: item, completed: false }];
    setItems(newItems);
  };

  const toggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const editItem = (index) => {
    const newText = prompt("Edit movie:", items[index].text);
    if (newText) {
      const newItems = [...items];
      newItems[index].text = newText;
      setItems(newItems);
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="stream-list">
      <h2>My Watchlist</h2>
      <StreamListForm onAddItem={addItem} />
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.completed ? "completed" : ""}>
            {item.text}
            <div className="actions">
              <button onClick={() => toggleComplete(index)} title="Mark as Watched">
                <FaCheck />
              </button>
              <button onClick={() => editItem(index)} title="Edit">
                <FaEdit />
              </button>
              <button onClick={() => deleteItem(index)} title="Delete">
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
