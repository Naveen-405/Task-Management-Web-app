import { useState } from "react";
import { EyeIcon } from "../../components/common/Icons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register({ setAlerts }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5001/register", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
      });

      if (response.data.success === true) {
        setAlerts({
          type: "success",
          title: "Success",
          message: response.data.message,
        });
        setForm({
          name: "",
          password: "",
          phone: "",
          email: "",
        });
        navigate("/");
      }
    } catch (err) {
      if (err.response) {
        setAlerts({
          type: "error",
          title: "Login failed",
          message: err.response.data.message,
        });
      }
      console.log("Login failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-4xl flex overflow-hidden"
        style={{ minHeight: 560 }}
      >
        {/* Left: Login Form */}
        <div className="flex-1 flex flex-col justify-center px-12 py-12">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Register
          </h1>
          <p className="text-gray-600 text-sm   mb-8">
            Simplify your workflow and boost your productivity
          </p>

          {/* Name */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-md px-5 py-3 text-sm text-gray-700 placeholder-gray-700 focus:outline-none focus:shadow-sm transition-colors"
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-md px-5 py-3 text-sm text-gray-700 placeholder-gray-700 focus:outline-none focus:shadow-sm transition-colors"
            />
          </div>

          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-md px-5 py-3 text-sm text-gray-700 placeholder-gray-700 focus:outline-none focus:shadow-sm transition-colors"
            />
          </div>

          {/* Password */}
          <div className="mb-5 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-md px-5 py-3 text-sm text-gray-700 placeholder-gray-700 focus:outline-none focus:shadow-sm transition-colors pr-12"
            />
            <button
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              tabIndex={-1}
            >
              <EyeIcon open={showPassword} />
            </button>
          </div>

          {/* Login button */}
          <button
            onClick={handleRegister}
            className="w-full bg-gray-900 hover:bg-gray-700 text-white font-semibold rounded-full py-3 text-sm transition-colors mb-6 shadow-md"
          >
            Register
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Register */}
          <p className="text-center font-medium text-sm text-black">
            Already a member?{" "}
            <Link
              to="/"
              className="text-[#99e2aa] text-sm font-semibold hover:text-green-600 transition-colors"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Right: Illustration Panel */}
        <div
          className="flex  justify-center items-center w-5/12 bg-green-50 relative rounded-xl m-3 overflow-hidden"
          style={{ minHeight: 500 }}
        >
          <img src="assets/images/login.png" className="m-auto" alt="" />
        </div>
      </div>
    </div>
  );
}
