import { Link } from "react-router-dom";

const StudentNavbar = () => (
  <nav className="bg-blue-600 p-4 text-white">
    <div className="flex justify-between items-center max-w-screen-xl mx-auto">
      <h1 className="font-semibold text-xl">Student Dashboard</h1>
      <div className="space-x-4">
        <Link to="/student-dashboard" className="hover:text-gray-300">Dashboard</Link>
        <Link to="/login" className="hover:text-gray-300">Logout</Link>
      </div>
    </div>
  </nav>
);

export default StudentNavbar;
