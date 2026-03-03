import MainLogo from "../image/TestLogo.svg";

import NavLink from "../component/NavLink";
import ProfileNav from "../component/ProfileNav";

export default function Navbar() {
  return (
    <nav>
      <div className="menu-details">
        <img src={MainLogo} className="menu-logo" />
        <div className="menu-links">
          <NavLink />
        </div>
        <div className="profile-menu">
          <ProfileNav />
        </div>
      </div>
    </nav>
  );
}
