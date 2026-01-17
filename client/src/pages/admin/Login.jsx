import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../services/admin.service.js";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await adminLogin(formData);
      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
         style={{ backgroundColor: "#E7DEFE" }}>
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-slate-900">
          Admin Login
        </h2>
        <p className="text-center text-slate-500 mt-2">
          Login to access the admin dashboard
        </p>

        {/* Error */}
        {error && (
          <div className="mt-4 text-sm text-red-600 text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@maketechberry.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9062FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9062FF]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#9062FF] text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer note */}
        <p className="text-xs text-slate-400 text-center mt-6">
          Authorized access only • MakeTechBerry Admin
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
