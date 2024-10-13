import React, { useState } from 'react';
import plus from '../assets/plus.jpg';
import axios from 'axios';

const Card = () => {
    const [companies, setCompanies] = useState([]);

    const addCompany = async () => {
        const companyName = prompt("Enter the company's name:");
        if (companyName) {
            const response =await axios.post("http://localhost:8000/addcompany", {companyName})
            console.log(response.data);
            
            setCompanies((prevCompanies) => [...prevCompanies, companyName]);
        }
        
    };

    return (
        <div className="grid grid-cols-4 gap-10 mt-10 h-screen">
            <button
                className="relative w-full h-[50vh] bg-white rounded-[10%] border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none"
                onClick={addCompany}
            >
                <img src={plus} alt="Add Company" className="w-full h-full rounded-[10%] opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-xl text-white">Add Company</h3>
                </div>
            </button>

            {/* Render new cards for each company */}
            {companies.map((company, index) => (
                <div key={index} className="relative w-full h-[50vh] bg-cyan-600 border border-gray-300 rounded-[10%] shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none flex items-center justify-center">
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-white">{company}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
