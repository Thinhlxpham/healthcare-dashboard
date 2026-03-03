import Doctor from "../image/seniordoctor.png";
import VerticalDot from "../image/verticalgrid.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function ProfileNav() {
  return (
    <>
      <div className="profile-left">
        <img src={Doctor} className="profile-icon" />
        <div className="profile-name-details">
          <span className="profile-name-title">Dr. Jose Simmons</span>
          <span className="profile-type-detail">General Practitioner</span>
        </div>
      </div>
      <div className="profile-right">
        <FontAwesomeIcon icon={faGear} />
        <img src={VerticalDot} className="vertical-dot" />
      </div>
    </>
  );
}

export default ProfileNav;
