import Doctor from "../image/seniordoctor.png";
import VerticalDot from "../image/verticalgrid.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function ProfileNav() {
  return (
    <div className="profile-menu">
      {/* LEFT SIDE */}
      <div className="profile-left">
        <img src={Doctor} alt="Doctor profile" className="profile-icon" />

        <div className="profile-name-details">
          <span className="profile-name-title">Dr. Jose Simmons</span>

          <span className="profile-type-detail">General Practitioner</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="profile-right">
        <FontAwesomeIcon icon={faGear} className="gear-icon" />

        <img src={VerticalDot} alt="Menu" className="vertical-dot" />
      </div>
    </div>
  );
}

export default ProfileNav;
