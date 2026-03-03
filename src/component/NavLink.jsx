import HomeIcon from "../image/homeicon.svg";
import PersonIcon from "../image/personicon.svg";
import Calendar from "../image/calendar.svg";
import ChatIcon from "../image/chaticon.svg";
import Transaction from "../image/creditcardicon.svg";

function NavLink() {
  return (
    <>
      <div className="menu-link">
        <img src={HomeIcon} className="nav-icon" />
        <span className="nav-link">Overview</span>
      </div>
      <div className="menu-link">
        <img src={PersonIcon} className="nav-icon" />
        <span className="nav-link">Patients</span>
      </div>
      <div className="menu-link">
        <img src={Calendar} className="nav-icon" />
        <span className="nav-link">Schedule</span>
      </div>
      <div className="menu-link">
        <img src={ChatIcon} className="nav-icon" />
        <span className="nav-link">Message</span>
      </div>
      <div className="menu-link">
        <img src={Transaction} className="nav-icon" />
        <span className="nav-link">Transaction</span>
      </div>
    </>
  );
}

export default NavLink;
