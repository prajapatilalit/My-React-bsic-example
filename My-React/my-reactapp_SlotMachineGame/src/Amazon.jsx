import React from "react";
import sData from "./MovieListData";
import Card from "./Card";

const Amazon = () => {
  return (
    <Card
      key={sData[7].id}
      imgsrc={sData[7].imgsrc}
      title={sData[7].title}
      sname={sData[7].sname}
      link={sData[7].link}
    />
  );
};
export default Amazon;
