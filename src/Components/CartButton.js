import React, { useEffect, useState } from "react";
import Fab from "@material-ui/core/Fab";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
function CartButton() {
  let history = useHistory();
  const [itemCount, setItemCount] = useState();
  let cartItem_count = useSelector((state) => state.cart);
  useEffect(() => {
    setItemCount(cartItem_count.itemCount);
  }, [cartItem_count.itemCount]);
  return (
    <React.Fragment>
      <Badge badgeContent={itemCount} color="secondary">
        <Fab onClick={() => history.push("cart")}>
          <ShoppingCartIcon />
        </Fab>
      </Badge>
    </React.Fragment>
  );
}

export default CartButton;
