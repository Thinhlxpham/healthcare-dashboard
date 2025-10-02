import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

function DiagramList() {
  const { selectPatient } = useContext(PatientContext);

  // This is default page where user wasn't select patient name yet!
  if (!selectPatient) {
    return (
      <div>
        <div className="list">
          <h3>Diagnostic List</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hypertension</td>
              <td>Chronic high blood pressure</td>
              <td>Under Observation</td>
            </tr>
            <tr>
              <td>Type 2 Diabetes</td>
              <td>Insulin resistance and elevated blood sugar</td>
              <td>Cured</td>
            </tr>
            <tr>
              <td>Asthma</td>
              <td>Recurrent episodes of bronchial constriction</td>
              <td>Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      <div className="list">
        <h3>Diagnostic List</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(selectPatient.diagnostic_list) &&
          selectPatient.diagnostic_list.length > 0 ? (
            selectPatient.diagnostic_list.map((detail, index) => (
              <tr key={index}>
                <td>{detail.name || "N/A"}</td>
                <td>{detail.description || "N/A"}</td>
                <td>{detail.status || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No diagnostic records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DiagramList;
