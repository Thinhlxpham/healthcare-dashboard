import DiagramHistory from "./DiagramHistory";
import DiagramList from "./DiagramList";
import Navbar from "./Navbar";
import Patients from "./Patients";
import PersonalDetails from "./PersonalDetails";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="body-page">
        <Patients />

        <DiagramHistory />

        <PersonalDetails />
      </div>
      <div className="footer-page">
        <DiagramList />
      </div>
    </div>
  );
}

export default Dashboard;
