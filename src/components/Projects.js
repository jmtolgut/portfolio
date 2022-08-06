import { Container } from "react-bootstrap";
import { CorruselProject } from "./project/CorruselProject";
import colorSharp from "../assets/img/color-sharp.png";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <div className="skillCard-bx wow zoomIn">
            <div>
              <h2>Projects</h2>
              <p>
                These are my projects<br></br> Select which project you want to
                see for more details.
              </p>
            </div>
            <CorruselProject />
        </div>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image5" />
    </section>
  );
};
