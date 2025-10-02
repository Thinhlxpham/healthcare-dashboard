function PersonalDetailSkeleton() {
  return (
    <div className="personal-details">
      <div className="image-profile">
        <div className="main-image-profile-skeleton"></div>
        <h2 className="profile-name-skeleton"></h2>
        <p className="profile-age-skeleton"></p>
      </div>
      <div className="profile-details">
        <div className="dob-detail">
          <div className="birth-icon-skeleton"></div>
          <div className="patients-dateOfBirth">
            <span className="title-dateOfBirth-skeleton"></span>
            <span className="detail-dateOfBirth-skeleton"></span>
          </div>

          <div className="gender-detail">
            <div className="gender-icon-skeleton"></div>
            <div className="patients-gender">
              <span className="title-gender-skeleton"></span>
              <span className="main-gender-skeleton"></span>
            </div>
          </div>
          <div className="contact-info-detail">
            <div className="phone-icon-skeleton"></div>
            <div className="patients-contactInfo">
              <span className="title-contactInfo-skeleton"></span>
              <span className="main-phoneNumber-skeleton"></span>
            </div>
          </div>
          <div className="emergency-info-detail">
            <div className="emergencyPhone-icon-skeleton"></div>
            <div className="patients-emergencyInfo">
              <span className="title-emergencyInfo-skeleton"></span>
              <span className="main-emergencyPhone-skeleton"></span>
            </div>
          </div>
          <div className="insurance-info-detail">
            <div className="insurance-icon-skeleton"></div>
            <div className="patients-insurance">
              <span className="title-insurance-skeleton"></span>
              <span className="main-insurance-skeleton"></span>
            </div>
          </div>

          <div className="showAll-Info">
            <button className="showAll-btn-skeleton"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PersonalDetailSkeleton;
