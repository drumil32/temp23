import { useState } from "react";
import HeartComponent from "./components/HeartShapes";
import { BrowserRouter as Router } from "react-router-dom";
import GraphFirst from "./components/GraphFirst";
import GraphSec from "./components/GraphSec";
import GraphThird from "./components/GraphThird";
import ScholarshipChart from "./components/ScholarShipChart";
import RightsChart from "./components/RightsChart";
import HeartModelMap from "./components/HeartHere"
import CombinedChart from "./components/Combined"
import SpiderChart from "./components/SpiderChart";
import RadarChart from "./components/RadarGraph";
import CombinedRadarChart from "./components/Combine2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Router> */}
        <HeartModelMap/>
        <HeartComponent />
        <GraphFirst />
        <GraphSec />
        <GraphThird />
        <ScholarshipChart/>
        <RightsChart/>
        <CombinedChart/>
        <SpiderChart/>
        <RadarChart/>


        
        
      {/* </Router> */}
    </>
  );
}

export default App;
