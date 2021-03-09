import React, { useEffect, useState } from "react";
import "./CategoryDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import CartButton from "./CartButton";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function CategoryDetails() {
  const [details, setDetails] = useState([]);
  let foodList = useSelector((state) => state.jsondata);
  let dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    let data = foodList.data.filter((item) => item.id == id);
    setDetails(data);
  }, []);

  return (
    <div className="categoryDetails">
      <h1>Category Details</h1>
      {details.map((val) => (
        <Card key={val.id} className="item_Deatils">
          <CardActionArea>
            <img src={val.icon} width="350" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h6">
                {val.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                New Delhi 110059
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => dispatch({ type: "ADD_TO_CART" })}
            >
              Add
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => dispatch({ type: "REMOVE_TO_CART" })}
            >
              Remove
            </Button>
          </CardActions>
        </Card>
      ))}
      <div className="footer_cartButton">
        <CartButton />
      </div>
    </div>
  );
}

export default CategoryDetails;
