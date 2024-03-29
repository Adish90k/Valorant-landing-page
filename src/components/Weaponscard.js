import React,{useEffect,useState} from 'react'
import './weapons.css'



function Weaponscard() {

    const [Data, setData] = useState([]);

    const baseURL = "https://valorant-api.com/v1/weapons";
  
    useEffect(() => {
      fetch(baseURL)
        .then((res) => res.json())
        .then((resp) => setData(resp.data));
    }, []);  



  return (
    <>
    
    {Data.map((val, key) => (
  val.displayIcon ? (
    <div className="mainweaponscarddiv" key={key}>
      <img src={val.displayIcon} alt="displayname" />
      <div className="weaponscontendiv">
        {val.displayName}
      </div>
    </div>
  ) : null
))}

    </>
  )
}

export default Weaponscard