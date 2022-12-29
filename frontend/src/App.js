import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Loginin from "./components/Loginin";
import Dashboard from "./components/Dashboard";
import AddShow from "./components/AddShow";
import Home from "./components/Home";
import ShowManager from "./components/manageshow";
import Home1 from "./components/Home1";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route element={<Home></Home>} path="/" />
        <Route element={<Loginin></Loginin>} path="loginin" />
        <Route element={<Signup></Signup>} path="signup" />
        <Route element={<AddShow></AddShow>} path="addshow" />
        <Route element={<Home></Home>} path="home" />
        <Route element={<Dashboard></Dashboard>} path="dashboard" />
        <Route element={<ShowManager></ShowManager>} path="manageshow"/>
        <Route element={<Home1></Home1>} path="home1"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
