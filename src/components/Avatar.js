import React, { useState, useEffect } from "react";
import "./avatar.css";
function Avatar() {
  const [Data, setData] = useState([]);

  const baseURL = "https://valorant-api.com/v1/agents";

  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((resp) => setData(resp.data));
  }, []);

  return (
    <>
      {Data.map((val, key) => (
  val.fullPortraitV2 ? (
    <div className="maineventscarddiv" key={key}>
      <img src={val.fullPortraitV2} alt="displayname" />

      <div className="eventscontendiv">
        {val.displayName}
        <div className="hideeeventcontentdiv">
          <h2></h2>
          <p>{val.description}</p>
        </div>
      </div>
    </div>
  ) : null
))}
    </>
  );
}

export default Avatar;
