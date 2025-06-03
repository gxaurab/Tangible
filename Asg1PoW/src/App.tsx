import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Awareness from "./components/Awareness"
import Application from "./components/Application"
import Mastery from "./components/Mastery"
import Learning from "./components/Learning"
import BlogLayout from "./pages/BlogLayout"


function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/awareness" element={<Awareness/>} />
        <Route path="/application" element={<Application/>} />
        <Route path="/mastery" element={<Mastery/>} />
        <Route path="/influence" element={<BlogLayout/>} />
        <Route path="/learnings" element={<Learning/>}/>
      </Routes>
    </>
  )
}

export default App
