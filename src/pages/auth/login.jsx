import React, { useState } from "react";
import { loginUser } from "../../api/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sm from "../../assets/sm.png";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      if (response.status === 401) {
        toast.error("User does not exist or invalid credentials.", {
          position: "top-right",
        });
        setErrorMessage("User does not exist or invalid credentials.");
      } else if (response.status === 200) {
        localStorage.setItem("isLoggedIn", "true");
        toast.success("Login successful!", {
          position: "top-right",
        });
        setSuccessMessage("Login successful!");
        setTimeout(() => {
          navigate("/");
        }, [2000]);
        setFormData({
          email: "",
          password: "",
        });

        setErrorMessage("");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.", {
        position: "top-right",
      });
      setErrorMessage("Login failed. Please try again.");
      console.error("Error logging in user:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <div className="grid grid-cols-[450px_1fr]">
        <div className="bg-white shadow-md p-10 w-full flex flex-col  justify-center">
          <h1 className="text-2xl font-bold text-purple-600 text-center mb-6">
            LOGIN
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
              <label htmlFor="email" className="block text-black font-medium ">
                Email :
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your email"
                required
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
                className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <a href="#" className="text-sm text-purple-600 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-black text-sm">
              Don't have an account?
              <a
                href="/register"
                className="text-purple-600 hover:underline ml-1"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
        <div className="flex bg-white w-[100%]">
          {" "}
          <img src={sm} className="object-cover" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
