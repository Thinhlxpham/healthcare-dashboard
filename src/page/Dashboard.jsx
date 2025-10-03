import { PatientContext } from "../context/PatientContext";
import DiagramHistory from "./DiagramHistory";
import DiagramList from "./DiagramList";
import LabResult from "./LabResult";
import Navbar from "./Navbar";
import Patients from "./Patients";
import PersonalDetails from "./PersonalDetails";
import { useEffect, useState } from "react";
import axios from "axios";
function Dashboard() {
  const [patient, setPatient] = useState([]);

  const [selectPatient, setSelectPatient] = useState(null);

  // Login API
  const username = "coalition";
  const password = "skills-test";
  // Encode in Base64
  const base64 = btoa(`${username}:${password}`);
  async function fetchPatientAPI() {
    const { data } = await axios.get(
      "https://fedskillstest.coalitiontechnologies.workers.dev/",
      {
        headers: {
          Authorization: `Basic ${base64}`,
        },
      }
    );
    setPatient(data);
  }
  useEffect(() => {
    fetchPatientAPI();
  }, []);
  return (
    <div>
      <PatientContext.Provider
        value={{
          patient,

          selectPatient,
          setSelectPatient,
        }}
      >
        <Navbar />

        <div className="body-page">
          <div className="patients-name">
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
            <div className="lab-results">
              <LabResult />
            </div>
          </div>
        </div>

        <div className="footer-page"></div>
      </PatientContext.Provider>
    </div>
  );
}

export default Dashboard;
