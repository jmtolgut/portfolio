import { Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";



export const PrueSkillsMap = ({title, imgUrl, description}) => {
  return (
    <Col size={12} sm={6} md={4}>
    <TrackVisibility>
    {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__flipInY"
                      : ""
                  }
                >
    <div className="proj-imgbx">
      <img src={imgUrl} alt="not found"/>
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
    </div>
    )}
    </TrackVisibility>
  </Col>
  )
}
