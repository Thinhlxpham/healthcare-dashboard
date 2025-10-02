function NavBarSkeleton() {
  return (
    <div className="navbar-menu">
      <div className="menu-details">
        <div className="nav-logo">
          <div className="logo-skeleton"></div>
        </div>
        <div className="nav-middle">
          <div className="overview-btn">
            <div className="overview-btn-skeleton"></div>
          </div>
          <div className="paitents-btn">
            <div className="paitents-btn-skeleton"></div>
          </div>
          <div className="schedule-btn">
            <div className="schedule-btn-skeleton"></div>
          </div>
          <div className="message-btn">
            <div className="message-btn-skeleton"></div>
          </div>
          <div className="credit-card-btn">
            <div className="credit-card-skeleton"></div>
          </div>
        </div>
        <div className="nav-right">
          <div className="doctor-account-skeleton"></div>
        </div>
      </div>
    </div>
  );
}
export default NavBarSkeleton;
