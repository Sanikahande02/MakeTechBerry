import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-6">
      <h2 className="text-xl font-bold mb-8">
        MakeTechBerry Admin
      </h2>

      <nav className="space-y-4">
        <Link to="/admin/dashboard" className="block hover:text-indigo-600">
          Dashboard
        </Link>

        <Link to="/admin/internships" className="block hover:text-indigo-600">
          Internships
        </Link>

        <Link to="/admin/projects" className="block hover:text-indigo-600">
          Projects
        </Link>

        <button
          onClick={handleLogout}
          className="text-red-500 mt-6 hover:text-red-700 transition-colors"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
