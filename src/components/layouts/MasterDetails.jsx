import "./MasterDetails.css";

const MasterDetailsLayout = ({ children }) => {
  const [master, details] = children;
  return (
    <div className="master-details-container">
      <div className="master">{master}</div>
      <div className="details">{details}</div>
    </div>
  );
};

export default MasterDetailsLayout;
