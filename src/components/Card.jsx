import React, { useState, useEffect } from "react";
import plus from "../assets/plus.jpg";

import { Link, useNavigate } from "react-router-dom"; // For navigation
import axiosInstance from "../axiosInstanceOf";
import AddCompanyNameModal from "./AddCompanyNameModal";

const Card = () => {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);
  const [show, setSHow] = useState(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };
  // Fetch companies from the API
  const fetchCompanies = async () => {
    try {
      const response = await axiosInstance.get("/api/company");
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
  const addCompany = async (name) => {
    setSHow(true);
    fetchCompanies();
  };
  const handleClose = () => {
    setSHow(false);
    fetchCompanies();
  };

  // DELETE - (/api/company)
  const hadnleDeleteCompany = async (companyId) => {
    try {
      const response = await axiosInstance.delete(`/api/company/delete/${companyId}`);
      const listOfCompanies = response.data.content;
      if (response.statusText !== "OK") {
        throw new Error("Failed to fetch companies");
      }
      setCompanies(listOfCompanies);
      // Store the fetched companies in state
    } catch (error) {
      setError(error.message);
    }
  };

  // Conditional rendering based on error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-5 ">
      <div className="flex justify-between items-center">

        {/* SEARCH */}

        <div>
          add Search here
        </div>

      {/* ADD COMPANY */}
        <button className="" onClick={addCompany}>
          <div className="">
            <h3 className="font-bold text-white bg-gray-700 px-4 py-2 rounded-lg">
              Add Company
            </h3>
          </div>
        </button>
      </div>



        {show && <AddCompanyNameModal show={show} handle={handleClose} />}
        <div class="">
  <div class="m-1.5 overflow-x-auto flex justify-center">
    <div class="p-1.5 min-w-[80vw] inline-block align-middle">
      <div class="overflow-hidden ">
        <table class="min-w-[80vw] divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Company Name</th>
              <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Actions</th>

            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
          
        {/* Render cards for each company */}
        {companies.map((company) => (
              <tr key={company.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  <Link to={`/companypage/${company._id}`} className="text-blue-600 text-[16px] hover:underline">
                    {company.name}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button
                    type="button"
                    onClick={() => hadnleDeleteCompany(company._id)}
                    className="inline-flex items-center gap-x-2 text-sm font-semibold text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
                  </tbody>
        </table>
      </div>
    </div>
  </div>

      </div>
    </div>
  );
};

export default Card;
