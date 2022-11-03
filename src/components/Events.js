// import React, { useState, useEffect } from "react";
// import './events.css'


// function Events() {
//   const [Data, setData] = useState([]);
//   const baseURL = "https://valorant-api.com/v1/events";

//   useEffect(() => {
//     fetch(baseURL)
//       .then((res) => res.json())
//       .then((resp) => setData(resp.data));
//   }, []);
 
 
//   return (
//     <> 
// <h1>Events</h1>

// {Data.map((val, key) => {
//           return (
//             <> 
//             <div className="mainsideeventscarddiv">
//            <h2>{val.displayName}</h2>
//            <h3>StartTime: <span>{val.startTime}</span> </h3>
//            <h3>StartTime: <span>{val.endTime}</span> </h3>
//              </div> 
//              </>
//           )
       
//       })}



     
//     </>
//   )
// }

// export default Events