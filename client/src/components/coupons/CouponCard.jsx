const CouponCard = ({ code, status, onClick }) => (
    <div className="border rounded-lg shadow p-4 flex justify-between items-center">
      <div>
        <h3 className="font-semibold">Coupon Code: {code}</h3>
        <p className="text-sm">Status: {status}</p>
      </div>
      <button onClick={onClick} className="text-blue-600 hover:underline">View</button>
    </div>
  );
  
  export default CouponCard;