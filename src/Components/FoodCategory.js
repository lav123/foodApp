import React from "react";
import "./FoodCategory.css";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
import CartButton from "./CartButton";
function FoodCategory() {
  let foodList = useSelector((state) => state.jsondata);
  return (
    <div className="food_Category">
      <h2>Main Category</h2>
      <div className="food_ItemList">
        {foodList.data
          ? foodList.data.map((item) => (
              <CategoryItem
                key={Math.random()}
                title={item.title}
                icon={item.icon}
                id={item.id}
              />
            ))
          : "Loading..."}
      </div>
      <div className="footer_cartButton">
        <CartButton />
      </div>
    </div>
  );
}

export default FoodCategory;
