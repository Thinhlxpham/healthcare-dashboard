import { useContext } from "react";
import Download from "../image/download.svg";
import { PatientContext } from "../context/PatientContext";

export default function LabResult() {
  const { selectedPatient, loading } = useContext(PatientContext);
  return (
    <section id="lab-result">
      <h1 className="lab-title">Lab Results</h1>
      <div className="lab-table-list">
        {loading ? (
          selectedPatient.lab_results.map((lab, index) => (
            <div key={index} className="result">
              <p className="result-para">{lab}</p>
              <img src={Download} className="result-download" />
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </section>
  );
}
