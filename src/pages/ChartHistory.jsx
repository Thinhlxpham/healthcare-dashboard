import { useContext, useMemo } from "react";
import DiagnosisDetails from "../component/DiagnosisDetails";
import { PatientContext } from "../context/PatientContext";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function ChartHistory() {
  const { selectedPatient, loading } = useContext(PatientContext);

  const diagnosisHistory = [
    ...(selectedPatient?.diagnosis_history || []),
  ].reverse();

  const chartLabel = diagnosisHistory.map(
    (item) => `${item.month.slice(0, 3)} ${item.year}`,
  );
  const systolicData = diagnosisHistory.map(
    (item) => item.blood_pressure.systolic.value,
  );
  const diastolicData = diagnosisHistory.map(
    (item) => item.blood_pressure.diastolic.value,
  );

  const chartData = useMemo(
    () => ({
      labels: chartLabel,
      datasets: [
        {
          label: "Systolic",
          data: systolicData,
          borderColor: "#C26EB4",
          backgroundColor: "#C26EB4",
          tension: 0.5,
        },
        {
          label: "Diastolic",
          data: diastolicData,
          borderColor: "#7E6CAB",
          backgroundColor: "#7E6CAB",
          tension: 0.5,
        },
      ],
    }),
    [chartLabel, systolicData, diastolicData],
  );

  const dataOption = useMemo(
    () => ({
      responsive: true,
      animation: true,
      plugins: { legend: { position: "top" } },
      scales: {
        x: {
          ticks: {
            maxRotation: 0,
            minRotation: 0,
          },
        },
      },
    }),
    [],
  );

  return (
    <section id="chart-history">
      <h1 className="diagnosis-title">Diagnosis History</h1>
      <div className="diagnosis-chart">
        <h3>Blood Pressure</h3>
        <Line data={chartData} options={dataOption} />
      </div>
      <div className="diagnosis-details">
        {selectedPatient && (
          <DiagnosisDetails
            selectedPatient={selectedPatient}
            loading={loading}
          />
        )}
      </div>
    </section>
  );
}
