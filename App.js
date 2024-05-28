import './App.css';
import Login from './component/Login';
import Register  from './component/Register';
import Home from './component/Home';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";

function App() {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
     <Route path="/home" element={<Home/>} />
     
    </Routes>
   </Router>
  );
}

export default App;
