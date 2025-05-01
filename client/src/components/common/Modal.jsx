const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg w-[90%] max-w-md p-6">
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          <div>{children}</div>
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="text-sm text-gray-600 hover:text-red-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  