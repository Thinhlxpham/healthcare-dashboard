import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

export default function PersonalTable() {
  const { selectedPatient, loading } = useContext(PatientContext);
  return (
    <section id="table-details">
      <h1 className="diagnosis-title">Diagnostic List</h1>
      <div className="container-table">
        {loading && selectedPatient ? (
          <table>
            <thead>
              <tr>
                <th>Problem/Diagnosis</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {selectedPatient.diagnostic_list.map((list, index) => (
                <tr key={index}>
                  <td>{list.name}</td>
                  <td>{list.description}</td>
                  <td>{list.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
}
