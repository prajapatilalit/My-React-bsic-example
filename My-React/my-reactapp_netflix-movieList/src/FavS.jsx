import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "Netflix";
// fat Arrow function
// const FavS = () => {
//   if (favSeries === "Netflix") {
//     return <Netflix />;
//   } else {
//     return <Amazon />;
//   }
// };

//ternary operator for if else condition
const FavS = () => {
  return favSeries === "Netflix" ? <Netflix /> : <Amazon />;
};

export default FavS;
