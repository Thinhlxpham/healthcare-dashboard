import DiagnosisDetails from "../component/DiagnosisDetails";

export default function ChartHistory() {
  return (
    <section id="chart-history">
      <h1 className="diagnosis-title">Diagnosis History</h1>
      <div className="diagnosis-chart"></div>
      <div className="diagnosis-details">
        <DiagnosisDetails />
      </div>
    </section>
  );
}
