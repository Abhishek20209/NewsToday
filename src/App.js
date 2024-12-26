import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
      <div>
        <div>
          <Navbar/>
        </div>
        
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>

      </div>
  );
}

export default App;
