<<<<<<< HEAD
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Signup from './components/Signup';
import Loginin from './components/Loginin'
import Dashboard from './components/Dashboard';
import AddShow from './components/addShow';
import Home from './components/Home';

function App() {
  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route element={<Loginin></Loginin>} path='loginin'/>
  <Route element={<Signup></Signup>} path='signup'/>
  <Route element={<Dashboard></Dashboard>} path='dashboard'/>
  <Route element={<AddShow></AddShow>} path='addshow'/>
  <Route element={<Home></Home>} path='home'></Route>
</Routes>
</BrowserRouter>
  );
=======
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
>>>>>>> 23b1a667abb66d1b893adb3887b9920bd6aa2d69
}

export default App
