import Respiratory from "../image/respiratory rate.svg";
import HeartBPM from "../image/HeartBPM.svg";
import Temperature from "../image/temperature.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function DiagnosisDetails() {
  return (
    <>
      <div className="diagnosis-respiratory">
        <img src={Respiratory} className="rate" />
        <p className="rate-part">Respiratory Rate</p>
        <h1 className="rate-title">20 bpm</h1>
        <span className="type-rate">Normal</span>
      </div>
      <div className="diagnosis-temperature">
        <img src={Temperature} className="rate" />
        <p className="rate-part">Temperature</p>
        <h1 className="rate-title">78 bpm</h1>
        <div className="filter-rate">
          <span className="type-rate">Normal</span>
        </div>
      </div>
      <div className="diagnosis-heart">
        <img src={HeartBPM} className="rate" />
        <p className="rate-part">Heart Rate</p>
        <h1 className="rate-title">20 bpm</h1>

        <span className="type-rate">
          <FontAwesomeIcon icon={faArrowDown} />
          Lower than Average
        </span>
      </div>
    </>
  );
}
