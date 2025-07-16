import React, { useState } from "react";
import { loginUser, registerUser } from "../../api/apiAuth";
import sm from "../../assets/sm.png";
import config from "../../api/config";
import axios from "axios";
import { toast } from "react-toastify";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    country_code: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  console.log("formData", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${config.API_BASE_URL}/user-create`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Registration Success:", response.data.message);
      toast.success(response.data.message);

      // Clear form
      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
        country_code: "",
      });
    } catch (error) {
      console.log("Registration Error:", error.response?.data);
      console.log(error.message);
      toast.error(error.response?.data?.detail);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen ">
      <div className="grid lg:grid-cols-[450px_1fr] md:grid-cols-[450px_1fr] grid-cols-1  ">
        <div className="p-5 w-full flex flex-col h-screen  justify-center max-w-[480px] mx-auto">
          <h1 className="text-2xl font-bold text-purple-600 text-center mb-6">
            SIGN UP
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-black font-medium ">
                Full Name :
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-black  focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-black font-medium ">
                Email :
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-black  focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-black font-medium "
              >
                Password :
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-black  focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-black font-medium ">
                Phone :
              </label>
              <div className="flex items-center">
                <select
                  id="country_code" // Ensure consistency with state key
                  value={formData.country_code}
                  onChange={handleChange}
                  className="px-4 py-[9.5px] border rounded-l-lg !text-black  focus:outline-none focus:ring-2 focus:ring-purple-600"
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
                  className="w-full px-4 py-2 border rounded-r-lg text-black  focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="1234567890"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition"
            >
              {loading ? "Sending Verification Email..." : "Register"}
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-black  text-sm">
              Already have an account?
              <a
                href="/login"
                title="Login"
                className="text-purple-600 hover:underline  ml-1"
              >
                Login here
              </a>
            </p>
          </div>
        </div>
        <div className="lg:flex md:flex hidden  bg-white w-[100]">
          <img src={sm} alt="Banner" title="Banner" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Register;
