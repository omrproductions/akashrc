import "./App.css";
import Card from "./components/Card.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegisterPage from "./components/RegisterPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import CompanyPage from "./components/CompanyPage.jsx";
import Navbar from "./components/Navbar.jsx";
import { useEffect, useState } from "react";


function App() {
  const [isLogin,setIsLogin] = useState(false);
  const token = localStorage.getItem("authToken");
    useEffect(() => {
    
    
    if(token){
      setIsLogin(true)
    }
    }, [])
    

  return (
    <div>
      
      <Router>
      {isLogin &&<Navbar/>}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={{token} ? <Card /> : <Navigate to="/login" />}/>
          <Route path="/companypage/:id" element={<CompanyPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
