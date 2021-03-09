import React from "react";
import "./App.css";
import FoodCategory from "./Components/FoodCategory";
import Header from "./Components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CategoryDetails from "./Components/CategoryDetails";
import Cart from "./Components/Cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <FoodCategory />
          </Route>
          <Route exact path="/category_details/:id">
            <CategoryDetails />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
