import { useContext } from "react";
import searchIcon from "../../image/searchIcon.png";

import horizontal3dot from "../../image/horizontal3dot.png";
import { PatientContext } from "../context/PatientContext";

function Patients() {
  const { patient, setSelectPatient } = useContext(PatientContext);

  return (
    <div className="main-headers">
      <div className="patients-header">
        <h3 className="patients-title">Patients</h3>
        <img src={searchIcon} className="search-icon" />
      </div>
      <div className="patient-lists">
        {Array.isArray(patient) && patient.length > 0 ? (
          patient.map((user, index) => (
            <div
              key={index}
              className="patients-info-list"
              onClick={() => setSelectPatient(user)}
            >
              <img src={user.profile_picture} className="patient-photo" />
              <div className="patient-name-details">
                <h5 className="patient-name">{user.name}</h5>
                <p>
                  {user.gender}, {user.age}
                </p>
              </div>
              <img src={horizontal3dot} className="horizontal-threedot-icon" />
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default Patients;
