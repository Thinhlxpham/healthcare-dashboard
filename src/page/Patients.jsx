import axios from "axios";
import { useEffect } from "react";
import searchIcon from "../../image/searchIcon.png";
import Layer1 from "../../image/Layer1.png";
import horizontal3dot from "../../image/horizontal3dot.png";
function Patients() {
  return (
    <div className="main-headers">
      <div className="patients-header">
        <h3>Patients</h3>
        <img src={searchIcon} className="search-icon" />
      </div>
      <div className="patient-lists">
        <div className="patients-info-list">
          <img src={Layer1} className="patient-photo" />
          <div className="patient-name-details">
            <h5 className="patient-name">Ryan Johnson</h5>
            <p>Male, 45</p>
          </div>
          <img src={horizontal3dot} className="horizontal-threedot-icon" />
        </div>
        <div className="patients-info-list">
          <img src={Layer1} className="patient-photo" />
          <div className="patient-name-details">
            <h5 className="patient-name">Ryan Johnson</h5>
            <p>Male, 45</p>
          </div>
          <img src={horizontal3dot} className="horizontal-threedot-icon" />
        </div>
        <div className="patients-info-list">
          <img src={Layer1} className="patient-photo" />
          <div className="patient-name-details">
            <h5 className="patient-name">Ryan Johnson</h5>
            <p>Male, 45</p>
          </div>
          <img src={horizontal3dot} className="horizontal-threedot-icon" />
        </div>
      </div>
    </div>
  );
}

export default Patients;
