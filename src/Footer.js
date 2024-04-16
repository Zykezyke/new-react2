import React from "react";
import Item from "./Item";

function Footer({ items }) {
  let completedItem = items.filter((item) => item.isChecked);

  let totalQuantity = items.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0
  );

  let totalCompleted = completedItem.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0
  );

  return (
    <div className="App-footer bg-dark text-light py-3">
      <p className="mb-0">Items Listed: {items.length}</p>
      <br />
      <p>Completed: {completedItem.length}.</p>
      <br />
      <p>Total Item Count: {totalQuantity}</p>
      <br />
      <p>Total Completed Count: {totalCompleted}</p>
    </div>
  );
}

export default Footer;
