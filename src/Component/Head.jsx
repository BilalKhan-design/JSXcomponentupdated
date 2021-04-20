import React from "react";

const dateToday = new Date();
const timeCurrent = dateToday.getHours();
const CustomStyle = {
  color: "red",
  border: "1px solid green"
};

let greeting;
if (timeCurrent < 12) {
  greeting = "Good Morning";
} else {
  greeting = "Good AfterNoon";
  // CustomStyle.color = "red";
}

function Head() {
  return <h1 style={CustomStyle}>{greeting}</h1>;
}

export default Head;
