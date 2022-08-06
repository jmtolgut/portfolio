import { Container } from "react-bootstrap";

export const ProjDescription = ({ title, description, imgUrl }) => {
  return (
    <Container className="contentprojcard">
          <div className="proj-imgcard">
            <img src={imgUrl} alt="not found" />
            <div className="proj-card">
              <div>
                <h4>{title}</h4>
                <span>{description}</span>
              </div>
            </div>
          </div>
    </Container>
  );
};
