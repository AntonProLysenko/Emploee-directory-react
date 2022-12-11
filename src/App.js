import {Route,Routes}from "react-router-dom"
import './App.css';
import HomePage from "./components/HomePage";
import EmploeePage from "./components/EmploeePage";


function App() {
  return (

    <div className="App">
      <HomePage/>
    {/* <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/:id" element = {<EmploeePage/>}/> 
    </Routes> */}
    </div>
    
  );
}

export default App;
