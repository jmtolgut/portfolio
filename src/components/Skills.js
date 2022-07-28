import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { Col, Container, Row } from "react-bootstrap";

import javaScript from "../assets/img/js.png";
import bootstrap from "../assets/img/bootstrap.png";
import css from "../assets/img/css-3.png";
import nodeJs from "../assets/img/nodejs.png";
import pyton from "../assets/img/pyton.png";
import reactJs from "../assets/img/react.png";
import reactSuite from "../assets/img/react-suite.png";
import gitHub from "../assets/img/githubSkill.png";
import html from "../assets/img/html-5.png";
import { PrueSkillsMap } from "./skills/PrueSkillsMap";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sskills = [
    {
      id: 1,
      title: "jAVASCRIPT",
      description: "Design & Development",
      imgUrl: javaScript,
    },
    {
      id: 2,
      title: "REACT",
      description: "Design & Development",
      imgUrl: reactJs,
    },
    {
      id: 3,
      title: "REACT-SUITE",
      description: "Design & Development",
      imgUrl: reactSuite,
    },
    {
      id: 4,
      title: "CSS",
      description: "Design & Development",
      imgUrl: css,
    },
    {
      id: 5,
      title: "BOOTSTRAP",
      description: "Design & Development",
      imgUrl: bootstrap,
    },
    {
      id: 6,
      title: "NODEJS",
      description: "Design & Development",
      imgUrl: nodeJs,
    },
    {
      id: 7,
      title: "PYTHON",
      description: "Design & Development",
      imgUrl: pyton,
    },
    {
      id: 8,
      title: "GITHUB",
      description: "Design & Development",
      imgUrl: gitHub,
    },
    {
      id: 9,
      title: "HTML",
      description: "Design & Development",
      imgUrl: html,
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <section className="skillCard" id="skills">
                <Container>
                  <Row>
                    <Col size={12}>
                      <div className="skillCard-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.<br></br> Lorem Ipsum has been
                          the industry's standard dummy text.
                        </p>
                        <Row>
                          {sskills.map((skill) => {
                            return <PrueSkillsMap key={skill.id} {...skill} />;
                          })}
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Container>
                <img
                  className="background-image-left"
                  src={colorSharp}
                  alt="Image5"
                />
              </section>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image1" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image2" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image3" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image4" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image5" />
    </section>
  );
};
