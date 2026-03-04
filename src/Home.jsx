import ChartHistory from "./pages/ChartHistory";
import LabResult from "./pages/LabResult";
import Navbar from "./pages/Navbar";
import PatientList from "./pages/PatientList";
import PersonalDetails from "./pages/PersonalDetails";
import PersonalTable from "./pages/PersonalTable";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <PatientList />
        <ChartHistory />
        <PersonalDetails />
        <PersonalTable />
        <LabResult />
      </main>
    </>
  );
}
