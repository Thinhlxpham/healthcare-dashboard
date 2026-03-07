import Respiratory from "../image/respiratory rate.svg";
import HeartBPM from "../image/HeartBPM.svg";
import Temperature from "../image/temperature.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function DiagnosisDetails({ selectedPatient, loading }) {
  const renderPatient = selectedPatient?.diagnosis_history?.[0];
  return loading && renderPatient ? (
    <>
      <div className="diagnosis-respiratory">
        <img src={Respiratory} className="rate" />
        <p className="rate-part">Respiratory Rate</p>
        <h1 className="rate-title">
          {renderPatient.respiratory_rate?.value} bpm
        </h1>
        <span className="type-rate">
          {renderPatient.respiratory_rate?.levels}
        </span>
      </div>
      <div className="diagnosis-temperature">
        <img src={Temperature} className="rate" />
        <p className="rate-part">Temperature</p>
        <h1 className="rate-title">{renderPatient.temperature?.value}°F</h1>
        <div className="filter-rate">
          <span className="type-rate">{renderPatient.temperature?.levels}</span>
        </div>
      </div>
      <div className="diagnosis-heart">
        <img src={HeartBPM} className="rate" />
        <p className="rate-part">Heart Rate</p>
        <h1 className="rate-title">{renderPatient.heart_rate?.value} bpm</h1>

        <span className="type-rate">
          <FontAwesomeIcon icon={faArrowDown} />
          {renderPatient.heart_rate?.levels}
        </span>
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
}
