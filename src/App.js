import React from "react";
import ItemList from "./ItemList";
import items from "./data";
import Header from "./Header";
import Form from "./Form";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
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
    <div>
      <Header />
      <Form onAddItem={handleAddItems} />
      <ItemList
        items={items}
        onDelete={handleDeleteItem}
        onToggleChecked={handleToggleChecked}
      />
    </div>
  );
};

export default App;
