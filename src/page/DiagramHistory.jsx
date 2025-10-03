import lungs from "../../image/lungs.png";
import temperature from "../../image/temperature.png";
import heart from "../../image/heart.png";
import { useContext, useMemo } from "react";
import { PatientContext } from "../context/PatientContext";

import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

function DiagramHistory() {
  const { selectPatient } = useContext(PatientContext);

  // Define diagnosis_history which make easier to fetch API
  const latestDiagnosis = selectPatient?.diagnosis_history?.[0] || {};
  const respiratoryRate = latestDiagnosis.respiratory_rate || {};
  const heartRate = latestDiagnosis.heart_rate || {};
  const temp = latestDiagnosis.temperature || {};

  // Diagnostic history last 6 month report
  const history = selectPatient?.diagnosis_history?.slice(0, 6).reverse() || [];
  // Defind variable chart bar API
  const chartLabel = history.map((data) => {
    return `${data.month}, ${data.year}`;
  });
  // Map through systolic and diastolic data chart
  const systolicData = history.map(
    (data) => data.blood_pressure?.systolic?.value || 0
  );
  const diastolicData = history.map(
    (data) => data.blood_pressure?.diastolic?.value || 0
  );
  // Defind syslotic and diagnotic
  const systolic = latestDiagnosis.blood_pressure?.systolic || {};
  const diastolic = latestDiagnosis.blood_pressure?.diastolic || {};

  const defaultChartData = useMemo(
    () => ({
      labels: [
        "Oct, 2023",
        "Nov, 2023",
        "Dec, 2023",
        "Jan, 2024",
        "Feb, 2024",
        "Mar, 2024",
      ],
      datasets: [
        {
          label: "Systolic",
          data: [120, 118, 160, 105, 145, 159],
          borderColor: "#C26EB4",
          tension: 0.4,
        },
        {
          label: "Diastolic",
          data: [110, 61, 110, 95, 70, 79],
          borderColor: "#7E6CAB",
          tension: 0.4,
        },
      ],
    }),
    []
  );

  const chartData = useMemo(
    () => ({
      labels: chartLabel,
      datasets: [
        {
          label: "Systolic",
          data: [...systolicData],
          borderColor: "#C26EB4",
          tension: 0.4,
        },
        {
          label: "Diastolic",
          data: [...diastolicData],
          borderColor: "#7E6CAB",
          tension: 0.4,
        },
      ],
    }),
    [
      JSON.stringify(chartLabel),
      JSON.stringify(systolicData),
      JSON.stringify(diastolicData),
    ]
  );

  const chartOptions = useMemo(
    () => ({
      responsive: true,
      animation: false,
      transitions: {
        active: { animation: { duration: 0 } },
        resize: { animation: { duration: 0 } },
      },
      plugins: {
        legend: {
          position: "top",
        },
      },
    }),
    []
  );

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
            <Line data={defaultChartData} options={chartOptions} />
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
          <Line data={chartData} options={chartOptions} />
          <div className="health-record">
            <div className="health-summary">
              <div className="summary systolic">
                <div className="dot pink"></div>
              </div>
              <p>Systolic</p>
              <h2>{systolic.value}</h2>
              <small>
                {systolic.levels === "Higher than average"
                  ? "▲"
                  : systolic.levels === "Lower than average"
                  ? "▼"
                  : ""}{" "}
                {systolic.levels}
              </small>
            </div>
            <div className="summary-diastolic">
              <span className="dot purple"></span>
              <div>
                <p>Diastolic</p>
                <h2>{diastolic.value}</h2>
                <small>
                  {diastolic.levels === "Higher than average"
                    ? "▲"
                    : diastolic.levels === "Lower than average"
                    ? "▼"
                    : ""}{" "}
                  {diastolic.levels}
                </small>
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
