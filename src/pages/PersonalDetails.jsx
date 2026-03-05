import { useContext } from "react";
import PersonalInfo from "../component/PersonalInfo";
import Person from "../image/seniordoctor.png";
import { PatientContext } from "../context/PatientContext";

export default function PersonalDetails() {
  const { selectedPatient, loading } = useContext(PatientContext);
  return (
    <section id="personal-details">
      {loading ? (
        selectedPatient && (
          <>
            <div className="personal-profile" key={selectedPatient.id}>
              <img
                src={selectedPatient.profile_picture}
                className="personal-image"
              />
              <h1 className="personal-name">{selectedPatient.name}</h1>
            </div>
            <div className="personal-details-info">
              <PersonalInfo selectedPatient={selectedPatient} />
              <button className="show-info-btn">Show All Information</button>
            </div>
          </>
        )
      ) : (
        <h1>Loading..</h1>
      )}
    </section>
  );
}
