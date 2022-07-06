import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Relawan from "./pages/Relawan";
import Emergencies from "./pages/emergencies";
import Login from "./pages/Login";
import Projects from "./pages/Projects/Project";
import ContentProjects from "./pages/Projects/contentProjects";


const App = () => {
  return (
    <div>
      <Routes> 
        <Route path="/" element={<Homepage />} >
          <Route path="/relawan" element={<Relawan />} />
          <Route path="/emergencies" element={<Emergencies />} />
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
