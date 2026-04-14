import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Atyeti</h4>
                <h5>2+ years</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Associate Software Engineer (SEP2023): The project which I have worked 
              on is for trade management and reporting trade to the regulatory authority. 
              This is linked to different vendors and trading platforms. We are getting trade information 
              and we are processing that using regulatory authority rules and performing operations 
              like processing trade, validation of trade, reporting to authority, and auditing. 
              Contribution in requirement gathering, design of the new feature, 
              development of different microservices, testing with code coverage,
              and delivery of business applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
