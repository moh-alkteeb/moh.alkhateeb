import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";
export const SideBar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <div className=" w-42 h-42">
        <Image
          src="/MyPhoto1.jpg"
          alt="My AVATAR"
          className="items-center mx-auto text-center border rounded-full w-42 h-42"
          height="228px"
          width="228px"
          layout="intrinsic"
          quality="100"
        />
      </div>
      <h3 className="my-4 text-3xl font-bold tracking-wider font-Style">
        <span className=" text-lightGreen">Moh.</span> Alkhateeb
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Jr.Fullstack dev
      </p>
      <a
        href="/assets/MAMCV.pdf"
        download="Moh_AlKhateeb_CV.pdf"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
      >
        {" "}
        <GiTie className="w-6 h-6 " />
        Download Resume
      </a>

      {/* Socail media */}
      <div className="flex justify-around w-9/12 mx-auto text-lightGreen md:w-full ">
        <a href="https://github.com/moh-alkteeb" aria-label="Alkhateeb Github">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="" aria-label="Alkhateeb Linkedin">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="" aria-label="Alkhateeb Youtube">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* Adress */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2 text-center">
          <GoLocation />
          <span>Yemen - Sanaa</span>
        </div>
        <p className="my-2">moh.alkteeb@gmail.com</p>
        <p className="my-2">+967 775 888 506</p>
      </div>
      {/* Email btn */}
      <button
        className="w-8/12 px-2 py-2 my-2 text-white rounded-full bg-gradient-to-r from-lightGreen to-blue-400"
        onClick={() => window.open("mailto:moh.alkteeb@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-2 py-2 my-2 text-white rounded-full bg-gradient-to-r from-lightGreen to-blue-400"
      >
        Toggle Theme
      </button>
    </div>
  );
};
export default SideBar;
