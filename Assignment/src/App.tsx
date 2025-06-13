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
import Awareness3 from "./components/Part3/Awareness";
import {Application3}  from "./components/Part3/Application";
import { Mastery3 } from "./components/Part3/Mastery";
import { Influence3 } from "./components/Part3/Influence";
import { Learning3 } from "./components/Part3/Learning";
import Assignment3Layout from "./layouts/Assignment3Layout";
import Assignment4Layout from "./layouts/Assignment4Layout";
import { Awareness4 } from "./components/Part4/Awareness4";
import  {Application4}  from "./components/Part4/Application4";
import { Mastery4 } from "./components/Part4/Mastery4";
import { Influnence4 } from "./components/Part4/Influnence4";
import { Learning4 } from "./components/Part4/learning4";

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
          <Route path="learnings" element={<Learning2 />} />
        </Route>

        <Route path="ass3" element={<Assignment3Layout/>}>
          <Route path="awareness" element={<Awareness3/>}/>
          <Route path="application" element={<Application3/>}/>
          <Route path="mastery" element={<Mastery3/>}/>
          <Route path="influence" element={<Influence3/>}/>
          <Route path="learnings" element= {<Learning3/>}/>
        </Route>

        <Route path="ass4" element={<Assignment4Layout/>}>
          <Route path="awareness" element={<Awareness4/>}/>
          <Route path="application" element={<Application4/>}/>
          <Route path="mastery" element={<Mastery4/>}/>
          <Route path="influence" element={<Influnence4/>}/>
          <Route path="learnings" element= {<Learning4/>}/>
        </Route>
        
      </Route>
    </Routes>
  );
}

export default App;
