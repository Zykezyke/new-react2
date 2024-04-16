import React from "react";
import Item from "./Item";

function Footer({ items }) {
  let completedItem = items.filter((item) => item.isChecked);

  let totalQuantity = items.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0
  );

  return (
    <div className="App-footer bg-dark text-light py-3">
      <p className="mb-0">
        You have {items.length} unique items in your list and have already
        completed {completedItem.length}. There are {totalQuantity} items in
        total.
      </p>
    </div>
  );
}

export default Footer;
