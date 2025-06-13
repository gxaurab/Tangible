import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SharedNavBar from "./components/SharedNavBar";

// Assignment 1
import Awareness from "./components/Part1/Awareness";
import Application from "./components/Part1/Application";
import Mastery from "./components/Part1/Mastery";
import Influence from "./pages/BlogLayout";
import Learning from "./components/Part1/Learning";

// Assignment 2
import Awareness2 from "./components/Part2/Awareness";
import Application2 from "./components/Part2/Application";
import Mastery2 from "./components/Part2/Mastery";
import Influence2 from "./components/Part2/Influence";
import Learning2 from "./components/Part2/Learning";

// Assignment 3
import Awareness3 from "./components/Part3/Awareness";
import { Application3 } from "./components/Part3/Application";
import { Mastery3 } from "./components/Part3/Mastery";
import { Influence3 } from "./components/Part3/Influence";
import { Learning3 } from "./components/Part3/Learning";

// Assignment 4
import { Awareness4 } from "./components/Part4/Awareness4";
import { Application4 } from "./components/Part4/Application4";
import { Mastery4 } from "./components/Part4/Mastery4";
import { Influnence4 } from "./components/Part4/Influnence4";
import { Learning4 } from "./components/Part4/learning4";

function App() {
  const location = useLocation();
  const currentAssignment = location.pathname.split("/")[1] || "ass1";

  return (
    <>
      <SharedNavBar currentAssignment={currentAssignment} />

      <Routes>
        <Route path="/" element={<Navigate to="/ass1/awareness" replace />} />

        <Route path="/ass1/awareness" element={<Awareness />} />
        <Route path="/ass1/application" element={<Application />} />
        <Route path="/ass1/mastery" element={<Mastery />} />
        <Route path="/ass1/influence" element={<Influence />} />
        <Route path="/ass1/learnings" element={<Learning />} />

        <Route path="/ass2/awareness" element={<Awareness2 />} />
        <Route path="/ass2/application" element={<Application2 />} />
        <Route path="/ass2/mastery" element={<Mastery2 />} />
        <Route path="/ass2/influence" element={<Influence2 />} />
        <Route path="/ass2/learnings" element={<Learning2 />} />

        <Route path="/ass3/awareness" element={<Awareness3 />} />
        <Route path="/ass3/application" element={<Application3 />} />
        <Route path="/ass3/mastery" element={<Mastery3 />} />
        <Route path="/ass3/influence" element={<Influence3 />} />
        <Route path="/ass3/learnings" element={<Learning3 />} />

        <Route path="/ass4/awareness" element={<Awareness4 />} />
        <Route path="/ass4/application" element={<Application4 />} />
        <Route path="/ass4/mastery" element={<Mastery4 />} />
        <Route path="/ass4/influence" element={<Influnence4 />} />
        <Route path="/ass4/learnings" element={<Learning4 />} />
      </Routes>
    </>
  );
}

export default App;
