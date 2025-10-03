import logoHealthCare from "../../image/logoHealthCare.png";
import homeIcon from "../../image/homeIcon.png";
import group from "../../image/group.png";
import calender from "../../image/calendar.png";
import chat from "../../image/chat.png";
import creditcard from "../../image/creditcard.png";
import SeniorDoctor from "../../image/SeniorDoctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import vertical3dot from "../../image/vertical3dot.png";

function Navbar() {
  return (
    <div className="navbar-menu">
      <div className="menu-details">
        <div className="nav-logo">
          <img src={logoHealthCare} className="logo" />
        </div>
        <div className="nav-middle">
          <div className="overview-btn">
            <img src={homeIcon} />
            <p className="overview">Overview</p>
          </div>
          <div className="paitents-btn">
            <img src={group} />
            <p className="paitents">Patients</p>
          </div>
          <div className="schedule-btn">
            <img src={calender} />
            <p className="schedule">Schedule</p>
          </div>
          <div className="message-btn">
            <img src={chat} />
            <p className="message">Message</p>
          </div>
          <div className="credit-card-btn">
            <img src={creditcard} />
            <p className="transaction">Transaction</p>
          </div>
        </div>
        <div className="nav-right">
          <img src={SeniorDoctor} />
          <div className="doctor-account">
            <span className="doctor_name">Dr. Jose Simmons</span>
            <span className="occupation">General Practitioner</span>
          </div>
          <div className="vertical-bar">|</div>
          <div className="menu-icon">
            <FontAwesomeIcon icon={faGear} />
            <img src={vertical3dot} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
