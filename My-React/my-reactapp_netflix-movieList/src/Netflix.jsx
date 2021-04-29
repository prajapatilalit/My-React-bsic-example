import React from "react";
import sData from "./MovieListData";
import Card from "./Card";

const Netflix = () => {
  return (
    <Card
      key={sData[0].id}
      imgsrc={sData[0].imgsrc}
      title={sData[0].title}
      sname={sData[0].sname}
      link={sData[0].link}
    />
  );
};
export default Netflix;
