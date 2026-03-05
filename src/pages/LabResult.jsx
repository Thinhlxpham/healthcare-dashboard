import Download from "../image/download.svg";

export default function LabResult() {
  return (
    <section id="lab-result">
      <h1 className="lab-title">Lab Results</h1>
      <div className="lab-table-list">
        <div className="result">
          <p className="result-para">Blood Test</p>
          <img src={Download} className="result-download" />
        </div>
        <div className="result">
          <p className="result-para">CT Scans</p>
          <img src={Download} className="result-download" />
        </div>
        <div className="result">
          <p className="result-para">Radiology Reports</p>
          <img src={Download} className="result-download" />
        </div>
        <div className="result">
          <p className="result-para">X-Rays</p>
          <img src={Download} className="result-download" />
        </div>
        <div className="result">
          <p className="result-para">Urine Test</p>
          <img src={Download} className="result-download" />
        </div>
      </div>
    </section>
  );
}
