import QRCode from "react-qr-code";

const QRCodeDisplay = ({ value }) => (
  <div className="bg-white p-4 rounded shadow w-fit">
    <QRCode value={value} size={128} />
  </div>
);

export default QRCodeDisplay;