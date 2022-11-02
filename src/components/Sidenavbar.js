import React from "react";
import "./Middlenavbar.css";
import Weapons from "../images/submachine-gun.png"
import People from "../images/people.png"
import Gamemodes from "../images/shuffle.png"
import Map from "../images/placeholder.png"
import Bundles from "../images/layer.png"
import Logoimg from "../images/Daco_4489723.png";
import { Link,NavLink } from 'react-router-dom';
function Sidenavbar() {

  // const getcolor=(curr)=>{
  //   if(history.location.pathname===curr){
  //   return "100%";
  // style={{opacity:getcolor()}}
  // }  
  // }




  return (
    <>
      <div className="mainmiddlecontainer">
        <div className="logosidbardiv">
          <img src={Logoimg} alt="" width="60px" />
        </div>
        <nav>
          <ul>
            <li className="midliitem" id="liitem1">
<NavLink to='/'  className="linknonactive">
     <div className="licontentdiv">
              <img src={People} alt="" width="20px"/>
              <p>Agents</p>
              </div>
</NavLink>  
            </li>
            <li className="midliitem" id="liitem2">            
       <NavLink to="/weapons"  className="linknonactive">
         <div className="licontentdiv">
              <img src={Weapons} alt="" width="20px"/>
              <p>Weapons</p>
              </div>
       </NavLink>
             </li>
            <li className="midliitem" id="liitem3">

<NavLink to='/Maps'  className="linknonactive">
 <div className="licontentdiv">
              <img src={Map} alt="" width="20px"/>
              <p>Maps</p>
              </div>  
</NavLink>    
            </li>
            <li className="midliitem" id="liitem4">
        <NavLink to='/Bundles'  className="linknonactive">
         <div className="licontentdiv">
              <img src={Gamemodes} alt="" width="20px"/>
              <p>Gamemodes</p>
              </div>   
               </NavLink>   
         
            </li>
            <li className="midliitem" id="liitem5">
           <NavLink to='/Gamesmodes'  className="linknonactive">
          <div className="licontentdiv">
              <img src={Bundles} alt="" width="20px"/>
              <p>Bundles</p>
              </div>    
           </NavLink>
          
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default  Sidenavbar;
