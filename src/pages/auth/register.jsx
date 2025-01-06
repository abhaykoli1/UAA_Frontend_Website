import React, { useState } from "react";
import { loginUser, registerUser } from "../../api/apiAuth";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    country_code: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      if (response.status === 401) {
        setSuccessMessage("user already exist!");
      }
      if (response.status === 201 || response.status === 200) {
        setSuccessMessage("Registration successful!");
        setFormData({
          name: "",
          email: "",
          password: "",
          phone: "",
          country_code: "",
        });
      }
    } catch (error) {
      setErrorMessage("Registration failed. Please try again.");
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <div className="grid grid-cols-[450px_1fr]">
        <div className="bg-black shadow-md p-10 w-full  flex flex-col items-cente justify-center">
          <h1 className="text-2xl font-bold text-pink-500 text-center mb-6">
            SIGN UP
          </h1>
          {errorMessage && (
            <div className="text-red-500 text-center mb-4">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="text-green-500 text-center mb-4">
              {successMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-white  font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-white  focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white  font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-white  focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-white  font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-white  focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-white  font-medium mb-2"
              >
                Phone
              </label>
              <div className="flex items-center">
                <select
                  id="country_code" // Ensure consistency with state key
                  value={formData.country_code}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-l-lg text-white  focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                </select>
                <input
                  type="number"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-r-lg text-white  focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="1234567890"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-600 transition"
            >
              Register
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-white  text-sm">
              Already have an account?
              <a href="/login" className="text-pink-500 hover:underline  ml-1">
                Login here
              </a>
            </p>
          </div>
        </div>
        <div className="flex  bg-white w-[100]"></div>
      </div>
    </div>
  );
};

export default Register;
