import axios from "axios";
import DiagramHistory from "./DiagramHistory";
import DiagramList from "./DiagramList";
import LabResult from "./LabResult";
import Navbar from "./Navbar";
import Patients from "./Patients";
import PersonalDetails from "./PersonalDetails";
import { useEffect, useState } from "react";
import { PatientContext } from "../context/PatientContext";

function Dashboard() {
  const [patient, setPatient] = useState("");

  async function fetchPatientAPI() {
    const { data } = await axios.get(
      "https://fedskillstest.coalitiontechnologies.workers.dev/"
    );
    setPatient(data);
    console.log(data);
  }
  useEffect(() => {
    fetchPatientAPI();
  });

  return (
    <PatientContext.Provider value={{ patient, setPatient }}>
      <div>
        <Navbar />

        <div className="body-page">
          <div className="card patients-name">
            <Patients />
          </div>

          <div className="diagram-personal">
            <div className="card diagnosis-history">
              <DiagramHistory />
            </div>
            <div className="card diagnostic-list">
              <DiagramList />
            </div>
          </div>

          <div className="personal-record">
            <div className="card">
              <PersonalDetails />
            </div>
            <div className="card lab-results">
              <LabResult />
            </div>
          </div>
        </div>

        <div className="footer-page"></div>
      </div>
    </PatientContext.Provider>
  );
}

export default Dashboard;
