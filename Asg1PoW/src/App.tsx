import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Assignment1Layout from "./layouts/Assignment1Layout";
import Assignment2Layout from "./layouts/Assignment2Layout";

import Awareness from "./components/Part1/Awareness";
import Application from "./components/Part1/Application";
import Mastery from "./components/Part1/Mastery";
import Influence from "./pages/BlogLayout";

import Awareness2 from "./components/Part2/Awareness";
import Application2 from "./components/Part2/Application";
import Mastery2 from "./components/Part2/Mastery";
import Learning2 from "./components/Part2/Learning";

import Learning from "./components/Part1/Learning";
import Influence2 from "./components/Part2/Influence";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="ass1" element={<Assignment1Layout />}>
          <Route path="awareness" element={<Awareness />} />
          <Route path="application" element={<Application />} />
          <Route path="mastery" element={<Mastery />} />
          <Route path="influence" element={<Influence />} />
          <Route path="learnings" element={<Learning/>}/>
        </Route>

        <Route path="ass2" element={<Assignment2Layout />}>
          <Route path="awareness" element={<Awareness2 />} />
          <Route path="application" element={<Application2 />} />
          <Route path="mastery" element={<Mastery2 />} />
          <Route path="influence" element={<Influence2 />} />
          <Route path="learning" element={<Learning2 />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
