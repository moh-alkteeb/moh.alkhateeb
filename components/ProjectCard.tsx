/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";

const ProjectCard: FC<{
  project: IProject;
  showDetails: null | number;
  setShowDetails: (id: null | number) => void;
}> = ({
  project: {
    id,
    name,
    category,
    deployed_url,
    description,
    github_url,
    image_path,
    key_techs,
  },
  showDetails,
  setShowDetails,
}) => {
  const apperDetails = () => {
    return showDetails !== id ? setShowDetails(id) : setShowDetails(null);
  };
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer "
        onClick={apperDetails}
        width="300"
        height="150"
        layout="responsive"
      />
      {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={apperDetails}
      /> */}
      <p className="font-bold text-center">{name}</p>

      {showDetails === id && (
        <motion.div
          className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-300 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:bg-dark-100 dark:text-white"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <div>
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-400"
            >
              <Image
                src={image_path}
                alt={name}
                className="cursor-pointer"
                onClick={apperDetails}
                width="300"
                height="150"
                layout="responsive"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-xl bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>GitHub</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-xl bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>

            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <motion.span
                  variants={fadeInUp}
                  className="px-2 py-2 my-1 bg-gray-200 dark:bg-dark-200"
                  key={tech}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            <button
              onClick={() => setShowDetails(null)}
              className="absolute bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200 "
            >
              <MdClose size={30} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
