import { useContext } from "react";
import download from "../../image/download.png";
import { PatientContext } from "../context/PatientContext";

function LabResult() {
  const { selectPatient } = useContext(PatientContext);

  // This is a default lab result page!
  if (!selectPatient) {
    return (
      <div>
        <h3 className="lab-title">Lab Results</h3>
        <div className="details-lab-result">
          <div className="result-description">
            <p>Blood Test</p>
            <img src={download} className="downloadIcon" />
          </div>
          <div className="result-description">
            <p>CT Scans</p>
            <img src={download} className="downloadIcon" />
          </div>
          <div className="result-description">
            <p>Radiology Reports</p>
            <img src={download} className="downloadIcon" />
          </div>
          <div className="result-description">
            <p>X-Rays</p>
            <img src={download} className="downloadIcon" />
          </div>
          <div className="result-description">
            <p>Urine Test</p>
            <img src={download} className="downloadIcon" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h3 className="lab-title">Lab Results</h3>
      {Array.isArray(selectPatient.lab_results) &&
      selectPatient.lab_results.length > 0 ? (
        selectPatient.lab_results.map((result, index) => (
          <div key={index} className="details-lab-result">
            <div className="result-description">
              <p>{result}</p>
              <img src={download} className="downloadIcon" />
            </div>
          </div>
        ))
      ) : (
        <h1>Loadding....</h1>
      )}
    </div>
  );
}

export default LabResult;
