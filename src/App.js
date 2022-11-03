import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import Weapons from './components/Weapons';
import Bundles from "./components/Bundles";
// import Gamesmodes from './components/Gamemodes';
import Mainmaps from "./components/Mainmap"
function App() {
  return (

    < >
<Router>
  <Routes>
<Route path='/' exact element={<Home/>}/>
<Route path='/weapons' exact element={<Weapons/>}/>
<Route path='/Maps' exact element={<Mainmaps/>}/>
<Route path='/Bundles' exact element={<Bundles/>}/>
{/* <Route path='/Gamesmodes' exact element={<Gamesmodes/>}/> */}
</Routes>
</Router>
    </>
  );
}

export default App;
