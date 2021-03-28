import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  const pets = [
    { name: "Luna", animal: "Dog", breed: "Havanese" },
    {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    },
    { name: "Doink", animal: "Cat", breed: "Mix" },
  ];
  return React.createElement("div", { class: "outer-div" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, pets[0]),
    React.createElement(Pet, pets[1]),
    React.createElement(Pet, pets[2]),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
