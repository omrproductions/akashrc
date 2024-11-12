import React, { useState, useEffect } from "react";
import plus from "../assets/plus.jpg";

import { Link, useNavigate } from "react-router-dom"; // For navigation
import axiosInstance from "../axiosInstanceOf";
import AddCompanyNameModal from "./AddCompanyNameModal";

const Card = () => {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);
  const [show,setSHow]= useState(null);
  const navigate = useNavigate();
  const handleLogout =()=>{
    localStorage.removeItem("authToken");
    const token = localStorage.getItem("authToken")
    if(token){
    navigate("/home");
    }
    else{
      navigate("/login")
    }
  }
  // Fetch companies from the API
  const fetchCompanies = async () => {
    try {
      const response = await axiosInstance.get("/getcompanies");
      const listOfCompanies = response.data.companies; // provides an array of objects
      if (response.statusText !== "OK") {
        throw new Error("Failed to fetch companies");
      }
      setCompanies(listOfCompanies);
      // Store the fetched companies in state
    } catch (error) {
      setError(error.message);
    }
  };

  // Initial fetch of companies when the component mounts
  useEffect(() => {
    fetchCompanies();
  }, []);
  // Add a new company
  const addCompany =  () => {
    setSHow(true);
    fetchCompanies();
  };
  const handleClose = ()=>{
    setSHow(false);
    fetchCompanies();
  }

  // Conditional rendering based on error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-8 p-10 mt-10 h-screen bg-gradient-to-r from-blue-500 to-cyan-500">
    {/* Button to add a new company */}
    <button
      className="relative w-full h-[50vh] bg-white/30 backdrop-blur-md rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 focus:outline-none hover:bg-white/40"
      onClick={addCompany}
    >
      <img
        src={plus}
        alt="Add Company"
        className="w-full h-full rounded-3xl opacity-20 object-cover transition-opacity duration-300 hover:opacity-10"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-2xl font-bold text-white bg-black/30 px-4 py-2 rounded-lg">Add Company</h3>
      </div>
    </button>
    {show && (<AddCompanyNameModal show = {show} handle = {handleClose}/>)}

  
    {/* Render cards for each company */}
    {companies.map((company) => (
      <Link
        to={`/companypage/${company._id}`}
        key={company.id}
        className="relative w-full h-[50vh] bg-cyan-700/40 backdrop-blur-md border border-gray-300 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 focus:outline-none flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
      >
        <div className="text-center">
          <h3 className="text-xl font-bold text-white drop-shadow-md">{company.name}</h3>
        </div>
      </Link>
    ))}
  </div>
  
  
  );
};

export default Card;
