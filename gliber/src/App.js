import NavBar from "./components/NavBar";
import Home from "./components/Pages/Home";
import MyServices from "./components/Pages/MyServices";
import AerialShots from "./components/Pages/AerialShots";
import Inspections from "./components/Pages/inspections";
import DroneBuyingGuide from "./components/Pages/DroneBuyingGuide";
import Formation from "./components/Pages/Formation";
import MyProjects from "./components/Pages/MyProjects";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyServices" element={<MyServices />}>
          <Route path="AerialShots" element={<AerialShots />} />
          <Route path="Inspections" element={<Inspections />} />
          <Route path="DroneBuyingGuide" element={<DroneBuyingGuide />} />
          <Route path="Formation" element={<Formation />} />
        </Route>
        <Route path="/MyProjects" element={<MyProjects />}/>

      </Routes>
    </div>
  );
}

export default App;
