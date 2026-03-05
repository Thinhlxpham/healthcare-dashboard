import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Patient from "../image/seniordoctor.png";
import ThreeDot from "../image/horizontal.svg";
import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";
export default function PatientList() {
  const { patientList, setSelectedPatient, loading } =
    useContext(PatientContext);
  const [openInput, setOpenInput] = useState(false);
  const [search, setSearch] = useState("");

  function toggleSearchIcon() {
    setOpenInput((prevOpen) => !prevOpen);
  }
  return (
    loading && (
      <section id="patient-list-page">
        <div className="patients-header">
          <h1 className="patients-title">Patients</h1>
          {openInput ? (
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          ) : (
            false
          )}
          <FontAwesomeIcon
            icon={faSearch}
            className="search"
            onClick={toggleSearchIcon}
          />
        </div>
        <div className="patient-list-details">
          {patientList.length > 0 ? (
            patientList
              .filter((patient) => {
                const searchQuery = search.toLowerCase();
                if (searchQuery === "") return true;
                return patient.name.toLowerCase().includes(searchQuery);
              })
              .map((patient, index) => (
                <div
                  key={index}
                  className="patient-detail"
                  onClick={() => setSelectedPatient(patient)}
                >
                  <img
                    src={patient.profile_picture}
                    className="patient-image"
                  />
                  <div className="patient-info">
                    <span className="patient-name">{patient.name}</span>
                    <span className="patient-detail">
                      {patient.gender}, {patient.age}
                    </span>
                  </div>
                  <div className="patient-setting">
                    <img src={ThreeDot} className="patient-edit" />
                  </div>
                </div>
              ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </section>
    )
  );
}
