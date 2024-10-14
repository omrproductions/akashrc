
import './App.css';
import Card from './components/Card.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./components/RegisterPage.jsx"; 
import LoginPage from './components/LoginPage.jsx';


function App() {
  const  token = localStorage.getItem("authToken");
  console.log(token);
  
  return (
    <div>
       <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/home" element={token ? <Card />: <Navigate to="/login"/>} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
