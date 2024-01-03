import React from "react";
// import axios from "axios";
import "./Home.css";
import Sidenavbar from "./Sidenavbar";
import Avatar from "./Avatar";
// import Logoimg from "../images/Daco_4489723.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Events from "./Events";
// import Mainmaps from "./Mainmap"


function Home() {
  // const [Data, setData] = useState([]);

  // const baseURL = "https://valorant-api.com/v1/events";
  // // const getUsers = async () => {
  // //   const users = await axios.get(baseURL);
  // //   setData(users.data);
  // //  };
  // //  useEffect(() => {
  // //   getUsers();
  // //  }, []);

  // useEffect(() => {
  //   fetch(baseURL)
  //     .then((res) => res.json())
  //     .then((resp) => setData(resp.data));
  // }, []);

  return (
    <>
    
    <div className="mainallcontainer">
        <div className="sidbarwrapper">
          <div className="sidebarcontainer">
            <Sidenavbar/>
          </div>
        </div>
        <div className="maincontainerhome">
          <div className="mainabovecontentdiv">
            <div className="maincontentwrapper">
              <div className="aboutbtndiv"> 
                <h3>Valorant</h3>
                <div className="btncontrollerdiv">
                 
                    <button id="btn1">Hero</button>
                
                    <button id="btn2">Shooter</button>
                  
                </div>
              </div>
              <div className="descripdiv">
                <span>Description</span>
                <p>
                Valorant is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows. Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020 </p>
              </div>
              <div className="playnowdiv">
                <button  >
                  <a href="https://playvalorant.com/en-us/"> Play now</a>
                 </button>
              </div>
            </div>
          </div>

          <div className="itemscontroller">
            <Avatar />
          </div>
        </div>
      </div>
    

    </>
  );
}

export default Home;
