import React, { useState } from "react";
import { loginUser } from "../../api/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sm from "../../assets/sm.png";
import axios from "axios";
import config from "../../api/config";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log("formData", formData);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  // user-login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${config.API_BASE_URL}/user-login`,
        formData
      );

      console.log(response);
      if (response.status === 200) {
        const { data } = response;

        const currentTime = Date.now();

        navigate("/");
        sessionStorage.setItem("isLoggedIn", true);
        sessionStorage.setItem("userId", data.id);
        sessionStorage.setItem("loginTime", Date.now().toString());
        toast.success(data.message);

        setFormData({ email: "", password: "" });
      } else {
        toast.error(response.data.detail || "Login failed.");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.detail || "Failed to login. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen ">
      <div className="grid lg:grid-cols-[450px_1fr] md:grid-cols-[450px_1fr] grid-cols-1  ">
        <div className="p-5 w-full flex flex-col h-screen  justify-center max-w-[480px max-w-[100%] mx-auto">
          <h1 className="text-2xl font-bold text-purple-600 text-center mb-6">
            LOGIN
          </h1>

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
              <a
                href="#"
                className="text-sm text-purple-600 hover:underline"
                title="Forgot Password"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition"
            >
              {loading ? "Loging..." : "Login"}
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-black text-sm">
              Don't have an account?
              <a
                href="/register"
                title="Register"
                className="text-purple-600 hover:underline ml-1"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
        <div className=" lg:flex md:flex hidden  bg-white w-[100%]">
          <img src={sm} alt="Banner" title="Banner" className="object-cover " />
        </div>
      </div>
    </div>
  );
};

export default Login;
