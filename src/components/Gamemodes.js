import React from 'react'
import Sidenavbar from "./Sidenavbar"


function Gamemodes() {
  return (
      
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
               
                  <a href="">
                    <button id="btn1">Hero</button>
                  </a>
                  <a href="">
                    <button id="btn2">Shooter</button>
                  </a>
                </div>
              </div>
              <div className="descripdiv">
                <span>Description</span>
                <p>
                Valorant is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows. Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020 </p>
              </div>
              <div className="playnowdiv">
                <button>Play now</button>
              </div>
            </div>
          </div>

          <div className="itemscontroller">
      
          </div>
        </div>
      </div>
    
  )
}

export default Gamemodes