import React from "react";
import ReactDOM from "react-dom/client";
import { renderIntoDocument } from "react-dom/test-utils";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard ready={false} />
    <Saludar />
    <Button text={'holass'}/>
    <input onChange={function (e) {
      console.log(e)
    }}/>
  </>
);
