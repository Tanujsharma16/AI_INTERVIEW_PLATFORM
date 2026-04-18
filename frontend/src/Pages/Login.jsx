import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
    const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState("");

  // handle input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // submit
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    setError("All fields are required!");
    return;
  }

  try {
    setLoading(true);
    const res = await axios.post(
      "http://localhost:5000/login",
      formData
    );

    // token mil gaya
    localStorage.setItem("token", res.data.token);
    setLoading(false);
    setError("");
    navigate("/dashboard");

  } catch (err) {
    setLoading(false);
    setError(err.response?.data?.msg || "Login failed");
  }
};

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl w-[350px] text-white">
        
        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back 
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white/20 p-3 rounded-lg outline-none placeholder-gray-300 focus:ring-2 focus:ring-blue-400"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-white/20 p-3 rounded-lg w-full outline-none placeholder-gray-300 focus:ring-2 focus:ring-blue-400"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {/* Remember me */}
          <div className="flex items-center justify-between text-sm">
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />{" "}
              Remember me
            </label>

            <span className="text-blue-400 cursor-pointer">
              Forgot Password?
            </span>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 transition-all py-2 rounded-lg font-semibold disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-4">
          <div className="flex-1 h-[1px] bg-gray-400"></div>
          <span className="text-sm">or</span>
          <div className="flex-1 h-[1px] bg-gray-400"></div>
        </div>

        {/* Google login */}
        <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition">
          Continue with Google
        </button>

      </div>
    </div>
  );
};

export default Login;
