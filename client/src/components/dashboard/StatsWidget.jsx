const StatsWidget = ({ title, value, icon }) => {
    return (
      <div className="bg-white shadow-lg p-4 rounded-lg flex items-center space-x-4">
        <div className="text-blue-600 text-3xl">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    );
  };
  
  export default StatsWidget;
  