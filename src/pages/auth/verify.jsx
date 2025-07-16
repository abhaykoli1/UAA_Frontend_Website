import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import config from "../../api/config";

const Verify = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const token = params.get("token");
    if (token) {
      verifyEmail(token);
    } else {
      setError("Token not found in URL");
      setLoading(false);
    }
  }, [search]);

  const verifyEmail = async (token) => {
    try {
      const response = await axios.get(
        `${config.API_BASE_URL}/verify?token=${token}`
      );

      const { id, email, message } = response.data;
      const currentTime = Date.now();

      setTimeout(() => {
        sessionStorage.setItem("isLoggedIn", true);
        sessionStorage.setItem("userId", id);
        sessionStorage.setItem("loginTime", Date.now().toString());
        toast.success("🎉 Welcome to UAA!");
        setMessage(message);
        setLoading(false);

        // Redirect after 1 sec
        setTimeout(() => navigate("/"), 1000);
      }, 1500);
    } catch (err) {
      const errorMsg = err.response?.data?.detail || err.message;
      toast.error(errorMsg);
      setError(errorMsg);
      setLoading(false);

      // Redirect after 6 seconds
      setTimeout(() => navigate("/"), 6000);
    }
  };

  return (
    <div className="items-center flex-col h-[100vh] justify-center flex px-4 text-center">
      <h1 className="text-2xl font-bold mb-3">Email Verification</h1>

      {loading && (
        <div className="flex flex-col gap-4 items-center">
          <p className="font-medium text-lg">Verifying your email...</p>
          <div className="loader animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
      )}

      {!loading && message && (
        <p className="text-green-600 font-medium text-lg">{message}</p>
      )}

      {!loading && error && (
        <p className="text-red-500 font-medium text-lg">{error}</p>
      )}
    </div>
  );
};

export default Verify;
