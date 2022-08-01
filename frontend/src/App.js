import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Signup from "./components/Signup"
import Loginin from "./components/Loginin"
import Dashboard from "./components/Dashboard"
import AddShow from "./components/addShow"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Loginin></Loginin>} path="loginin" />
        <Route element={<Signup></Signup>} path="signup" />
        <Route element={<Dashboard></Dashboard>} path="dashboard" />
        <Route element={<AddShow></AddShow>} path="addshow" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
