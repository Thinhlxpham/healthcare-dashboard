import axios from "axios";
import ChartHistory from "./pages/ChartHistory";
import LabResult from "./pages/LabResult";
import Navbar from "./pages/Navbar";
import PatientList from "./pages/PatientList";
import PersonalDetails from "./pages/PersonalDetails";
import PersonalTable from "./pages/PersonalTable";
import { useEffect, useState } from "react";
import { PatientContext } from "./context/PatientContext";

export default function Home() {
  const [patientList, setPatientList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedPatient, setSelectedPatient] = useState(null);

  async function fetchPatientData() {
    try {
      const response = await axios.get(
        "https://fedskillstest.coalitiontechnologies.workers.dev/",
        {
          auth: {
            username: "coalition",
            password: "skills-test",
          },
        },
      );
      const data = response.data;
      setPatientList(data);

      if (data && data.length > 0) {
        setSelectedPatient(data[3]);
      }
      setLoading(true);
    } catch (error) {
      console.log(`API error: ${error}`);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPatientData();
  }, []);

  return (
    <PatientContext.Provider
      value={{
        patientList,
        setPatientList,
        loading,
        selectedPatient,
        setSelectedPatient,
      }}
    >
      <Navbar />
      <main className="main-container">
        <PatientList />
        <ChartHistory />
        <PersonalDetails />
        <PersonalTable />
        <LabResult />
      </main>
    </PatientContext.Provider>
  );
}
