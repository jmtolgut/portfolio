import { Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const DescriptionSkills = ({ title, imgUrl, description }) => {
  return (
    <Col md={2} sm={4} xs={6}>
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={isVisible ? "animate__animated animate__flipInY" : ""}
          >
            <div className="proj-imgcard">
              <img src={imgUrl} alt="not found" />
              <div className="proj-card">
                <h4>{title}</h4>
                <span>{description}</span>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>
    </Col>
  );
};
