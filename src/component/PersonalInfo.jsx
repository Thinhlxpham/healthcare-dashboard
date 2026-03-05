import DateOfBirth from "../image/DOB.png";
import FemaleIcon from "../image/FemaleIcon.svg";
import Phone from "../image/PhoneIcon.svg";
import Insurance from "../image/InsuranceIcon.svg";

import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

export default function PersonalInfo({ selectedPatient }) {
  const { loading } = useContext(PatientContext);

  let convertDOB = "Unknown";
  if (selectedPatient.date_of_birth) {
    const dob = new Date(selectedPatient.date_of_birth);
    if (!isNaN(dob)) {
      convertDOB = dob.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }
  }
  return loading ? (
    selectedPatient && (
      <>
        <div className="personal-info">
          <div className="icon-wrapper">
            <img src={DateOfBirth} className="detail-icon" />
          </div>

          <div className="personal-detail">
            <span className="info-detail">Date Of Birth</span>
            <span className="info-render">{convertDOB}</span>
          </div>
        </div>
        <div className="personal-info">
          <div className="icon-wrapper">
            <img src={FemaleIcon} className="detail-icon" />
          </div>

          <div className="personal-detail">
            <span className="info-detail">Gender</span>
            <span className="info-render">{selectedPatient.gender}</span>
          </div>
        </div>
        <div className="personal-info">
          <div className="icon-wrapper">
            <img src={Phone} className="detail-icon" />
          </div>

          <div className="personal-detail">
            <span className="info-detail">Contact Info</span>
            <span className="info-render">{selectedPatient.phone_number}</span>
          </div>
        </div>
        <div className="personal-info">
          <div className="icon-wrapper">
            <img src={Phone} className="detail-icon" />
          </div>

          <div className="personal-detail">
            <span className="info-detail">Emergency Contacts</span>
            <span className="info-render">
              {selectedPatient.emergency_contact}
            </span>
          </div>
        </div>
        <div className="personal-info">
          <div className="icon-wrapper">
            <img src={Insurance} className="detail-icon" />
          </div>

          <div className="personal-detail">
            <span className="info-detail">Insurance Provider</span>
            <span className="info-render">
              {selectedPatient.insurance_type}
            </span>
          </div>
        </div>
      </>
    )
  ) : (
    <h1>Loading...</h1>
  );
}
