import { motion } from "framer-motion";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import { ProjDescription } from "./ProjDescription";


const projects = [
  {
    id: 1,
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    id: 2,
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    id: 3,
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
  },
  {
    id: 4,
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    id: 5,
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    id: 6,
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
  },
];

export const ProjectMap = () => {
  return (
    <div className="d-flex">
      {projects.map((project) => {
        return (
          <motion.div className="item" key={project.id}>
            <ProjDescription {...project} />
          </motion.div>
        );
      })}
    </div>
  );
};
