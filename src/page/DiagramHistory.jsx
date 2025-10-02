import lungs from "../../image/lungs.png";
import temperature from "../../image/temperature.png";
import heart from "../../image/heart.png";
import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";
import DiagramHistorySkeleton from "../LoadingSkeleton/DiagramHistorySkeleton";

function DiagramHistory() {
  const { selectPatient, isLoading } = useContext(PatientContext);

  // Define diagnosis_history which make easier to fetch API
  const latestDiagnosis = selectPatient?.diagnosis_history?.[0] || {};
  const respiratoryRate = latestDiagnosis.respiratory_rate || {};
  const heartRate = latestDiagnosis.heart_rate || {};
  const temp = latestDiagnosis.temperature || {};

  if (isLoading) {
    return <DiagramHistorySkeleton />;
  }

  if (!selectPatient) {
    return (
      <div className="diagram-personal">
        <h3>Diagnosis History</h3>
        <div className="diagram-graph">
          <div className="diagram-title">
            <h5 className="title-graph">Blood Pressure</h5>
            <select>
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="board-chart">
            <svg viewBox="0 0 600 250" className="healthcare-chart">
              <line
                x1="20"
                y1="220"
                x2="400"
                y2="220"
                stroke="#ddd"
                strokeWidth="1"
              />
              <path
                d="M40,140 C150,100 250,60 360,120 C470,200 580,140 580,100"
                stroke="#C26EB4"
                strokeWidth="3"
                fill="none"
              />
              <circle cx="40" cy="140" r="5" fill="#e78de5" />
              <circle cx="200" cy="90" r="5" fill="#e78de5" />
              <circle cx="400" cy="140" r="5" fill="#e78de5" />
              <circle cx="580" cy="100" r="5" fill="#e78de5" />
              <path
                d="M40,180 C150,240 250,150 360,200 C470,240 580,220 580,210"
                stroke="#7d6bf5"
                strokeWidth="3"
                fill="none"
              />
              <circle cx="40" cy="180" r="5" fill="#7d6bf5" />
              <circle cx="200" cy="201" r="5" fill="#7d6bf5" />
              <circle cx="360" cy="200" r="5" fill="#7d6bf5" />
              <circle cx="580" cy="210" r="5" fill="#7d6bf5" />
            </svg>
            <div className="health-record">
              <div className="health-summary">
                <div className="summary systolic">
                  <div className="dot pink"></div>
                </div>
                <p>Systolic</p>
                <h2>160</h2>
                <small>▲ Higher than Average</small>
              </div>
              <div className="summary-diastolic">
                <span className="dot purple"></span>
                <div>
                  <p>Diastolic</p>
                  <h2>78</h2>
                  <small>▼ Lower than Average</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inside-body-part">
          <div className="lungs">
            <img src={lungs} className="lungsIcon" />
            <p className="lungs-rating">Respiratory Rate</p>
            <h3>20 bmp</h3>
            <span className="status">Normal</span>
          </div>

          <div className="temperature">
            <img src={temperature} className="temperatureIcon" />
            <p className="temperature-rating">Temperature</p>
            <h3>98°F</h3>
            <span className="status">Normal</span>
          </div>

          <div className="heart">
            <img src={heart} className="heartIcon" />
            <p className="heart-rating">Heart Rate</p>
            <h3>78 bpm</h3>
            <span className="low-and-high">▲ Lower than Average</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="diagram-personal">
      <h3>Diagnosis History</h3>
      <div className="diagram-graph">
        <div className="diagram-title">
          <h5 className="title-graph">Blood Pressure</h5>
          <select>
            <option>Last 6 months</option>
            <option>Last year</option>
          </select>
        </div>
        <div className="board-chart">
          <svg viewBox="0 0 600 250" className="healthcare-chart">
            <line
              x1="20"
              y1="220"
              x2="400"
              y2="220"
              stroke="#ddd"
              strokeWidth="1"
            />
            <path
              d="M40,140 C150,100 250,60 360,120 C470,200 580,140 580,100"
              stroke="#C26EB4"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="40" cy="140" r="5" fill="#e78de5" />
            <circle cx="200" cy="90" r="5" fill="#e78de5" />
            <circle cx="400" cy="140" r="5" fill="#e78de5" />
            <circle cx="580" cy="100" r="5" fill="#e78de5" />
            <path
              d="M40,180 C150,240 250,150 360,200 C470,240 580,220 580,210"
              stroke="#7d6bf5"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="40" cy="180" r="5" fill="#7d6bf5" />
            <circle cx="200" cy="201" r="5" fill="#7d6bf5" />
            <circle cx="360" cy="200" r="5" fill="#7d6bf5" />
            <circle cx="580" cy="210" r="5" fill="#7d6bf5" />
          </svg>
          <div className="health-record">
            <div className="health-summary">
              <div className="summary systolic">
                <div className="dot pink"></div>
              </div>
              <p>Systolic</p>
              <h2>160</h2>
              <small>▲ Higher than Average</small>
            </div>
            <div className="summary-diastolic">
              <span className="dot purple"></span>
              <div>
                <p>Diastolic</p>
                <h2>78</h2>
                <small>▼ Lower than Average</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inside-body-part">
        <div className="lungs">
          <img src={lungs} className="lungsIcon" />
          <p className="lungs-rating">Respiratory Rate</p>
          <h3>{respiratoryRate.value} bmp</h3>
          <span className="status">{respiratoryRate.levels}</span>
        </div>

        <div className="temperature">
          <img src={temperature} className="temperatureIcon" />
          <p className="temperature-rating">Temperature</p>
          <h3>{temp.value}°F</h3>
          <span className="status">{temp.levels}</span>
        </div>

        <div className="heart">
          <img src={heart} className="heartIcon" />
          <p className="heart-rating">Heart Rate</p>
          <h3>{heartRate.value} bpm</h3>
          <span className="low-and-high">
            {heartRate.levels === "Lower than Average"
              ? "▼"
              : heartRate.levels === "Higher than Average"
              ? "▲"
              : ""}{" "}
            {heartRate.levels}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DiagramHistory;
