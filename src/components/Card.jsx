import React, { useState, useEffect } from "react";
import plus from "../assets/plus.jpg";
import axios from "axios";

const Card = () => {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);

  // Fetch companies from the API
  const fetchCompanies = async () => {
    try {
      const response = await fetch("http://localhost:8000/getcompanies");
      console.log(response);
      
      if (!response.ok) {
        throw new Error("Failed to fetch companies");
      }
      const data = await response.json();
      setCompanies(data); // Store the fetched companies in state
    } catch (error) {
      setError(error.message);
    }
  };

  // Initial fetch of companies when the component mounts
  useEffect(() => {
    fetchCompanies();
  }, []); // Empty dependency array to run only once when the component mounts

  // Add a new company
  const addCompany = async () => {
    const companyName = prompt("Enter the company's name:");
    if (companyName) {
      try {
        const response = await axios.post("http://localhost:8000/addcompany", {
          companyName,
        });
        console.log(response.data);

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

      {/* Render cards for each company */}
      {companies.map((company) => (
        <div
          key={company.id}
          className="relative w-full h-[50vh] bg-cyan-600 border border-gray-300 rounded-[10%] shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none flex items-center justify-center"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white">
              {company.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
