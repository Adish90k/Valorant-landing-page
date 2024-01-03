import React,{useEffect,useState} from 'react'
import "./Bundle.css"


function Bundlecard() {
    const [Data, setData] = useState([]);

    const baseURL = "https://valorant-api.com/v1/bundles";
  
    useEffect(() => {
      fetch(baseURL)
        .then((res) => res.json())
        .then((resp) => setData(resp.data));
    }, []);
  

  return (
    <>

{Data.map((val, key) => (
  val.displayIcon ? (
    <div className="mainbundlescarddiv" key={key}>
      <img src={val.displayIcon} alt="displayname" />

      <div className="bundlescontendiv">
        <div className="hidebundlescontentdiv">
          <h2>{val.displayName}</h2>
        </div>
      </div>
    </div>
  ) : (
    <p key={key}>Some error occurred</p>
  )
))}


    </>
  )
}

export default Bundlecard