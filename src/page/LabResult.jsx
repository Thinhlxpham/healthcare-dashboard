import download from "../../image/download.png";

function LabResult() {
  return (
    <div>
      <h3>Lab Results</h3>
      <div className="details-lab-result">
        <div className="result-description">
          <p>Blood Test</p>
          <img src={download} className="downloadIcon" />
        </div>
        <div className="result-description">
          <p>Blood Test</p>
          <img src={download} className="downloadIcon" />
        </div>
        <div className="result-description">
          <p>Blood Test</p>
          <img src={download} className="downloadIcon" />
        </div>
      </div>
    </div>
  );
}

export default LabResult;
