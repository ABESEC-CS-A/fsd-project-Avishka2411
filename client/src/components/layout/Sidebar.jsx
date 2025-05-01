import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-64 bg-gray-800 text-white p-6">
    <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
    <ul>
      <li>
        <Link to="/admin-dashboard" className="block py-2 hover:bg-gray-700 px-4 rounded">
          Admin Dashboard
        </Link>
      </li>
      <li>
        <Link to="/student-dashboard" className="block py-2 hover:bg-gray-700 px-4 rounded">
          Student Dashboard
        </Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
