import colorSharp from "../assets/img/color-sharp.png";
import { Col, Container, Row } from "react-bootstrap";

import { CarroselSkills } from "./skills/CarroselSkills";
import { SkillsMap } from "./skills/SkillsMap";

export const Skills = () => {
  return (
    <section className="skillCard" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <div className="skillCard-bx wow zoomIn">
              <div className="skillCard" id="skills">
                    <div className="skillCard-bx wow zoomIn">
                      <h2>Skills</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.<br></br> Lorem Ipsum has been the
                        industry's standard dummy text.
                      </p>
                      <SkillsMap />
                    </div>
              <CarroselSkills />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image5" />
    </section>
  );
};
