import React from "react";
import ngo from "./data";
var i = Math.floor((Math.random() * 2));
const slide = () => {
  return (
    <div className="Wrapper">
      <div className="Head">
  <h1>{ngo.d[i].data.text}</h1>
      </div>
      <div className="Data">
                {ngo.d[i].data.description}
        
      </div>
      <div className="Buttons">
        <button className="button1"><a href={ngo.d[i].data.donate}>Website</a></button>
        <button className="button1"><a href={ngo.d[i].data.donate}>Donate</a></button>
      </div>
    </div>
  );
};

export default slide;
