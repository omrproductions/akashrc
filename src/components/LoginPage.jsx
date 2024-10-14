import React, { useState } from "react";
import axios from "axios"; // Make sure axios is installed (npm install axios)
import { useNavigate } from "react-router-dom"; // For navigation

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To handle error messages
  const navigate = useNavigate(); // For redirection after login

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call the login API with the email and password
      const response = await axios.post("http://localhost:8000/api/user/login", {
        email,
        password,
      });

      // Assuming the token is in response.data.token
      const { token } = response.data;
      console.log(token);
      
      // Store the token in localStorage
      localStorage.setItem("authToken", token);

      // Clear the form
      setEmail("");
      setPassword("");
      setError(""); // Clear any previous errors

      // Redirect the user after successful login
      navigate("/dashboard"); // Replace '/dashboard' with the route you want to navigate to

      alert("Login successful!");

    } catch (err) {
      // Handle error, for example: incorrect credentials
      setError("Login failed. Please check your credentials.");
      console.error(err);
    }
  };

  // Handle Register Button (Optional, redirects to /register page)
  const handleRegister = () => {
    navigate("/register"); // Redirect to the register page
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        {error && <p className="text-red-500 mb-4">{error}</p>} {/* Show error message */}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>

          {/* Add Register Button */}
          <button
            type="button"
            onClick={handleRegister} // Navigate to register page
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
