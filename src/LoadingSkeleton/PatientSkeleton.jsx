function PatientSkeleton({ count = 10 }) {
  const skeletonItems = Array(count).fill(null);

  return (
    <>
      <div>
        <div className="skeleton-header">
          <h3 className="patients-title-skeleton"></h3>
          <div className="search-icon-skeleton"></div>
        </div>
        {skeletonItems.map((_, index) => (
          <div key={index} className="patient-lists-skeleton">
            <div className="patients-info-list-skeleton">
              <div className="patient-photo-skeleton"></div>
              <div className="patient-name-details">
                <h5 className="patient-name-skeleton"></h5>
                <p className="patient-info-skeleton"></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PatientSkeleton;
