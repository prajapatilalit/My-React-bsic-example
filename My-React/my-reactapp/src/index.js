import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const name = "Lalit Prajapti";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
ReactDom.render(
  <>
    <h1 className="heading">Hello, My Name is {name}</h1>
    <div className="img-div">
      <img src={img1} alt="RandomImage" />
      <img src={img2} alt="RandomImage" />
      <img src={img3} alt="RandomImage" />
    </div>
  </>,
  document.getElementById("root")
);
