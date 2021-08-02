// import { services } from "../data";

import { FunctionComponent } from "react";
import { IconType } from "react-icons";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { IService } from "../type";
import { motion } from "framer-motion";
import Head from "next/head";
import { services } from "../data";

const About = () => {
  return (
    <motion.div
      className="flex flex-col px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Web Devloper | About | Mohammed Alkhateeb</title>
      </Head>
      <h5 className="my-3 font-medium ">
        {` I'm a software developer with bachelor degree in Computer and Control
        Engineering. I have experience in web as well as desktop application
        development. I'm specialized in .Net (Framework & Core) technologies
        like ASP.Net MVC, WinForms and WPF also I have experience with front-end
        technologies like JS, JQuery, HTML and CSS. I have worked on several
        successful projects and I believe that I have what it takes to explore
        new challenges and thrive in the IT market.`}
      </h5>
      <div
        className="p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2 "
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1 "
              key={service.title}
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
