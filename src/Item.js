import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const Item = ({ item, onDelete, onToggleChecked }) => {
  return (
    <div
      className="card rounded-3"
      style={{ backgroundColor: "#f8f9fa", maxWidth: "400px" }}
    >
      <div className="card-body d-flex align-items-center">
        <p className="my-1 p-1 flex-grow-1">{item.quantity} </p>
        <p className="my-1 p-1 flex-grow-1">{item.name} </p>
        <div>
          <button className="btn btn-danger me-2" onClick={onDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className="btn btn-success" onClick={onToggleChecked}>
            {item.isChecked ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faCheck} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
