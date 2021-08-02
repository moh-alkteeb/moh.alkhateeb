import Bars from "../components/Bars";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";
import Head from "next/head";
function Resume() {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      className="flex flex-col flex-grow py-2 "
      exit="exit"
    >
      <Head>
        <title>Web Devloper | Resume | Mohammed Alkhateeb</title>
      </Head>
      {/* Education & Experience */}

      <div className="grid grid-cols-12 gap-6 px-6 ">
        {/* Education */}
        <motion.div
          className="col-span-12 px-6 bg-gray-50 lg:col-span-6 rounded-2xl dark:bg-dark-200 "
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h4 className="pl-3 my-3 text-2xl font-bold border-l-4 border-lightGreen">
            Education
          </h4>
          <div className="pl-4">
            <h5 className="my-2 text-xl font-bold"> software developer</h5>
            <p className="font-bold ">
              {" "}
              Computer and Control Engineering (2016-2020)
            </p>
            <p className="my-3 ">
              {" "}
              {"I'm"} a software developer with bachelor degree in Computer and
              Control Engineering. I believe that I have what it takes to
              explore new challenges and thrive in the IT market.
            </p>
          </div>
        </motion.div>
        {/*Experience */}
        <motion.div
          className="col-span-12 px-6 bg-gray-50 lg:col-span-6 rounded-2xl dark:bg-dark-200"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h4 className="pl-3 my-3 text-2xl font-bold border-l-4 border-lightGreen">
            Experience
          </h4>
          <div className="pl-4">
            <h5 className="my-2 text-xl font-bold"> Jr.Full Stack developer</h5>
            <p className="font-bold "> with TechGuilds Company (2021)</p>
            <p className="my-3 ">
              {" "}
              {" I'm"} specialized in .Net (Framework {"&"} Core) technologies
              like ASP.Net MVC, WinForms and WPF also I have experience with
              front-end technologies like JS,Reqact,NextJS,TS JQuery, HTML and
              CSS.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Language & Framework || Tools */}
      <div
        className="grid flex-grow grid-cols-12 gap-6 mt-2 bg-gray-200 dark:bg-dark-100 rounded-2xl"
        style={{ marginBottom: "-0.5rem" }}
      >
        {/*Language & Framework | */}
        <div className="col-span-12 px-6 lg:col-span-6 dark:bg-dark-100">
          <h4 className="pl-3 my-3 text-xl font-bold border-l-4 border-lightGreen">
            Language {"&"} Framework
          </h4>
          <div className="pl-4 my-2">
            {languages.map((Language) => (
              <Bars data={Language} key={Language.name} />
            ))}
          </div>
        </div>
        {/*Tools & Software */}
        <div className="col-span-12 px-6 lg:col-span-6 dark:bg-dark-100">
          <h4 className="pl-3 my-3 text-xl font-bold border-l-4 border-lightGreen">
            Tools{" &"} Softwares
          </h4>
          <div className="pl-4 my-2">
            {tools.map((tool) => (
              <Bars data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
