import { useEffect } from "react";

const Toast = ({ message, type = "success", duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = type === "success" ? "bg-green-100 border-green-500 text-green-700" : "bg-red-100 border-red-500 text-red-700";

  return (
    <div className={`fixed top-5 right-5 p-3 rounded shadow-md border ${bgColor}`}>
      {message}
    </div>
  );
};

export default Toast;