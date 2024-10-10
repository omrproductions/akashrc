import React, { useState } from 'react';
import plus from '../assets/plus.jpg';
import './Card.css'; // Import the CSS file for styling


const Card = () => {
    const [companies, setCompanies] = useState([]);

    const addCompany = () => {
        const companyName = prompt("Enter the company's name:");
        if (companyName) {
            setCompanies((prevCompanies) => [...prevCompanies, companyName]); // Update state correctly
        }
    };
    return (
        <div >
            <button className="card" onClick={addCompany}>
                <img src={plus} alt="Add Company" className="card-image" />
                <div className="card-content">
                    <h3>Add Company</h3>
                </div>
            </button>
            {/* Render new cards for each company */}
            {companies.map((company, index) => (
                <div key={index} className="card-holder">
                    <div className="newCard">
                        <h3>{company}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
