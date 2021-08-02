import ProjectCard from "../components/ProjectCard";
import ProjectNav from "../components/ProjectNav";
import { projects as projectsData } from "../data";
import { useState } from "react";
import { Category } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import Head from "next/head";

function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const [showDetails, setShowDetails] = useState<number | null>(null);
  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };
  return (
    <motion.div
      className="px-5 py-2 overflow-scroll"
      style={{ height: "90vh" }}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Web Devloper | Projests | Mohammed Alkhateeb</title>
      </Head>
      <ProjectNav
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3 "
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.div
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            key={project.name}
            variants={fadeInUp}
          >
            <ProjectCard
              project={project}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
