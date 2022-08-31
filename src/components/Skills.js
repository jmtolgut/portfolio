import { Container } from "react-bootstrap";

import { CarroselSkills } from "./skills/CarroselSkills";
import { SkillsMap } from "./skills/SkillsMap";

export const Skills = () => {
  return (
    <section className="skillCard" id="skills">
      <Container>
            <div className="skillCard-bx wow zoomIn">
                <h2>Here are my skills!!</h2>
                <p>
                  These are the languages with which I feel more comfortable to
                  work, but it is not a problem for me to study new technologies
                  because I love to test myself.{" "}
                </p>
                <div className="skillCard-bs">
                  <SkillsMap />
                </div>
                <CarroselSkills />
            </div>
      </Container>
    </section>
  );
};
