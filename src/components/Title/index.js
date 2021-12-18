import React from "react";
import "./styles.css";
import ttslogo from "./ttslogo.jpeg";

const Title = () => {
  return (
    <div class="title">
      <img
        src={ttslogo}
        style={{ width: "50px", height: "50px", marginRight: "10px" }}
      />
      <h1 id="h1-title">Tualatin tech club</h1>
    </div>
  );
};

export default Title;
