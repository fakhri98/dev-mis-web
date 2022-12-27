import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Relawan from "./pages/Relawan";
import Emergencies from "./pages/emergencies";
import Login from "./pages/Login";
import Projects from "./pages/Projects/Project";
import ContentProjects from "./pages/Projects/contentProjects";
import Header from "./pages/BaseLayout/Header";
// import PmiLevel from "./pages/pmiLevel";
import GetPmiLevelList from "./pages/pmiLevel";

const App = () => {
  return (
    <div>
      <Routes> 
        <Route>
          <Route path="/" element={<Dashboard />} />
          <Route path="/relawan" element={<Relawan />} />
          <Route path="/emergencies" element={<Emergencies />} />
          <Route path="/pmilevel" element={<GetPmiLevelList />} />
          <Route path="/project" element={<Projects />}> 
            <Route path=":id" element={<ContentProjects />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;
