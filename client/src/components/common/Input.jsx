const Input = ({ label, name, type = "text", value, onChange, placeholder }) => {
    return (
      <div className="flex flex-col mb-4">
        {label && (
          <label htmlFor={name} className="mb-1 font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    );
  };
  
  export default Input;