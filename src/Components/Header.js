import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useHistory } from "react-router";
import { IconButton } from "@material-ui/core";

function Header() {
  let history = useHistory();
  return (
    <div className="header">
      <div className="headerRight">
        <img
          src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/styles/1200x706/public/content6505.jpg?itok=lWRxbZM2"
          alt="gmail icon"
          onClick={() => history.push("/")}
        />
      </div>
      <div className="headerMiddle">
        <SearchIcon />
        <input type="text" placeholder="Search Food" />
        <ArrowDropDownIcon />
      </div>
      <div className="headerLeft">
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
