import React from "react";
// import FavS from "./FavS";
import sData from "./MovieListData";
import Card from "./Card";

function App() {
  return (
    <>
      <h1 className="heading_style">
        List of Top IMDB Rating Netflix & Amazon Web Series
      </h1>

      {/* <FavS /> */}
      {sData.map((val) => {
        return (
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })}
    </>
  );
}

export default App;
