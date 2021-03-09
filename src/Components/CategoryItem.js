import React from "react";
import { useHistory } from "react-router";
import "./CategoryItem.css";
function CategoryItem({ title, icon, id }, props) {
  let history = useHistory();
  return (
    <div className="category_Item">
      <div
        className="foodItem"
        onClick={() => history.push(`category_details/${id}`)}
      >
        <img src={icon} alt={title} />
        <p className="add_cartText">{title}</p>
      </div>
    </div>
  );
}

export default CategoryItem;
