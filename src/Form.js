import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Form = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    const newItem = { quantity, name, isChecked: false, id: Date.now() };
    setName("");
    setQuantity(1);
    onAddItem(newItem);
  };

  return (
    <div className="container text-center mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <select
              className="form-select-sm"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              {Array.from({ length: 20 }, (_, index) => index + 1).map(
                (num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                )
              )}
            </select>
            <input
              type="text"
              className="form-control form-control-lg" // Added form-control-lg class to make the input field larger
              placeholder="Enter item name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSubmit}>
              <FontAwesomeIcon icon={faPlus} /> Add Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
