import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Loginin from "./components/Loginin";
import Dashboard from "./components/Dashboard";
import AddShow from "./components/AddShow";
import Home from "./components/Home";
import ShowManager from "./components/ShowManager"

// import Dashboard2 from "./components/Dashboard2";
// import Dashboard from "./components/Dashboard2";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route element={<Home></Home>} path="/" />
        <Route element={<Loginin></Loginin>} path="loginin" />
        <Route element={<Signup></Signup>} path="signup" />
          {/* <Route element={<Dashboard></Dashboard>} path="dashboard" /> */}
          <Route element={<AddShow></AddShow>} path="addshow" />
          <Route element={<Dashboard></Dashboard>} path="dashboard" />
          <Route element={<ShowManager></ShowManager>} path="showmanager" />
          
          {/* <Route element={<Home></Home>} path="home"/> */}
      
        </Routes>
      </BrowserRouter>
    );
  }

export default App;
