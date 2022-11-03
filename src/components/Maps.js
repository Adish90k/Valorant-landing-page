import React,{useEffect,useState} from 'react'
import "./Map.css"

function Maps() {
  const [Data, setData] = useState([]);

  const baseURL = "https://valorant-api.com/v1/maps";

  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((resp) => setData(resp.data));
  }, []);

  return (
    <>

{Data.map((val, key) => {
        if (val.splash) {

          return (
            <div className="mainmapscarddiv">
              <img src={val.splash} alt="displayname" />
  
              <div className="mapscontendiv">
             
                <div className="hidemapcontentdiv">
                   <h2>  {val.displayName}</h2>
                  <p>
                 {
                 val.coordinates
                 }
                  </p>
                </div>
              </div>
            </div>
          );
       
        }
      })}




    </>
  )
}

export default Maps