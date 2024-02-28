import React, { useState } from "react";
import ItemList from "./ItemList";
import Header from "./Header";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    const existingItemIndex = items.findIndex(
      (item) => item.name.toLowerCase() === newItem.name.toLowerCase()
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += newItem.quantity;
      setItems(updatedItems);
    } else {
      setItems([...items, newItem]);
    }
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleToggleChecked = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <div className="bg-dark text-light app-container">
      {" "}
      <Header />
      <Form onAddItem={handleAddItem} />
      <ItemList
        items={items}
        onDelete={handleDeleteItem}
        onToggleChecked={handleToggleChecked}
      />
    </div>
  );
};

export default App;
