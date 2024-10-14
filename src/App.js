
import './App.css';
import Card from './components/Card.jsx';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage.jsx"; 
import LoginPage from './components/LoginPage.jsx';

function App() {
  return (
    <div>
       <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Card />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
