const Header = ({ title }) => (
    <header className="bg-blue-600 text-white py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
    </header>
  );
  
  export default Header;
  