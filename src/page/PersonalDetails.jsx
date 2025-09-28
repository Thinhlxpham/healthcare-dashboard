import Layer2 from "../../image/Layer2.png";
import birthIcon from "../../image/birthIcon.png";
import femaleIcon from "../../image/femaleIcon.png";
import phoneIcon from "../../image/phoneicon.png";
import InsuranceIcon from "../../image/InsuranceIcon.png";
function PersonalDetails() {
  return (
    <div className="personal-record">
      <div className="image-profile">
        <img src={Layer2} className="main-image-profile" />
        <h2 className="profile-name">Jessica Taylor</h2>
      </div>
      <div className="profile-details">
        <div className="dob-detail">
          <img src={birthIcon} className="birth-icon" />
          <div className="patients-dateOfBirth">
            <span className="title-dateOfBirth">Date Of Birth</span>
            <span className="detail-dateOfBirth">August 23, 1996</span>
          </div>
        </div>

        <div className="gender-detail">
          <img src={femaleIcon} className="gender-icon" />
          <div className="patients-gender">
            <span className="title-gender">Gender</span>
            <span className="main-gender">Female</span>
          </div>
        </div>

        <div className="contact-info-detail">
          <img src={phoneIcon} className="phone-icon" />
          <div className="patients-contactInfo">
            <span className="title-contactInfo">Contact Info</span>
            <span className="main-phoneNumber">(415) 555-1234</span>
          </div>
        </div>

        <div className="emergency-info-detail">
          <img src={phoneIcon} className="emergencyPhone-icon" />
          <div className="patients-emergencyInfo">
            <span className="title-emergencyInfo">Emergency Contacts</span>
            <span className="main-emergencyPhone">(415) 555-1234</span>
          </div>
        </div>

        <div className="insurance-info-detail">
          <img src={InsuranceIcon} className="insurance-icon" />
          <div className="patients-insurance">
            <span className="title-insurance">Insurance Provider</span>
            <span className="main-insurance">Sunrise Health Assurance</span>
          </div>
        </div>
      </div>
      <div className="showAll-Info">
        <button className="showAll-btn">Show All Information</button>
      </div>
    </div>
  );
}

export default PersonalDetails;
