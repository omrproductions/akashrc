import React, { useState, useEffect } from "react";
import plus from "../assets/plus.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation

const Card = () => {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLogout =()=>{
    localStorage.removeItem("authToken")
    navigate("/login");
    
  }
  // Fetch companies from the API
  const fetchCompanies = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getcompanies");
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
  const addCompany = async () => {
    const companyName = prompt("Enter the company's name:");
    if (companyName) {
      try {
        const response = await axios.post("http://localhost:8000/addcompany", {
          name: companyName,
        });
        // After successfully adding, fetch updated company list
        fetchCompanies();
      } catch (error) {
        console.error("Error adding company:", error);
      }
    }
  };

  // Conditional rendering based on error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-10 mt-10 h-screen">
      {/* Button to add a new company */}
      <button
        className="relative w-full h-[50vh] bg-white rounded-[10%] border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none"
        onClick={addCompany}
      >
        <img
          src={plus}
          alt="Add Company"
          className="w-full h-full rounded-[10%] opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-xl text-white">Add Company</h3>
        </div>
      </button>
      <button onClick={handleLogout}>
        logout
      </button>

      {/* Render cards for each company */}
      {companies.map((company) => (
        <div
          key={company.id}
          className="relative w-full h-[50vh] bg-cyan-600 border border-gray-300 rounded-[10%] shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none flex items-center justify-center"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white">{company.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
