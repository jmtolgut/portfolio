import javaScript from "../../assets/img/js.png";
import bootstrap from "../../assets/img/bootstrap.png";
import css from "../../assets/img/css-3.png";
import nodeJs from "../../assets/img/nodejs.png";
import pyton from "../../assets/img/pyton.png";
import reactJs from "../../assets/img/react.png";
import reactSuite from "../../assets/img/react-suite.png";
import gitHub from "../../assets/img/githubSkill.png";
import html from "../../assets/img/html-5.png";
import { Row } from "react-bootstrap";
import { DescriptionSkills } from "./DescriptionSkills";

const skills = [
  {
    id: 1,
    title: "jAVASCRIPT",
    description: "Development",
    imgUrl: javaScript,
  },
  {
    id: 2,
    title: "REACT",
    description: "FrameWork",
    imgUrl: reactJs,
  },
  {
    id: 3,
    title: "REACT-SUITE",
    description: "Design & BookShop",
    imgUrl: reactSuite,
  },
  {
    id: 4,
    title: "CSS",
    description: "Design",
    imgUrl: css,
  },
  {
    id: 5,
    title: "BOOTSTRAP",
    description: "Design & BookShop",
    imgUrl: bootstrap,
  },
  {
    id: 6,
    title: "NODEJS",
    description: "BackEnd",
    imgUrl: nodeJs,
  },
  {
    id: 7,
    title: "PYTHON",
    description: "BackEnd",
    imgUrl: pyton,
  },
  {
    id: 8,
    title: "GITHUB",
    imgUrl: gitHub,
  },
  {
    id: 9,
    title: "HTML",
    imgUrl: html,
  },
];

export const SkillsMap = () => {
  return (
    
    <Row>
      {skills.map((skill) => {
        return <DescriptionSkills key={skill.id} {...skill} />;
      })}
    </Row>
  );
};
