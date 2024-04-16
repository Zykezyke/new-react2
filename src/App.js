import React, { useState } from "react";
import ItemList from "./ItemList";
import Header from "./Header";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Footer";

const App = () => {
  const [items, setItems] = useState([]);

  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "checked") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
  }
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

  const handleClearList = () => {
    const confirmed = window.confirm("Are you sure to clear the list?");
    if (confirmed) {
      setItems([]);
    }
  };

  return (
    <div className="bg-dark text-light app-container">
      {" "}
      <Header />
      <Form onAddItem={handleAddItem} />
      <ItemList
        items={sortedItems}
        onDelete={handleDeleteItem}
        onToggleChecked={handleToggleChecked}
      />
      <button onClick={handleClearList} className="btn mx2 btn-lighter">
        Clear
      </button>
      <br />
      <select
        className="select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="input">Sort by Input</option>
        <option value="name">Sort by Name</option>
        <option value="checked">Sort by Check Status Order</option>
      </select>
      <Footer items={items} />
      <br />
    </div>
  );
};

export default App;
