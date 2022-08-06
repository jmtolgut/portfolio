import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ProjectMap } from "./ProjectMap";


export const CorruselProject = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    
  return (
    <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        <ProjectMap />
      </motion.div>
    </motion.div>
  );
};
