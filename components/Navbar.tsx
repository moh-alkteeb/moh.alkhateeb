import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span
          className="hover:text-lightGreen"
          onClick={() => setActiveItem(name)}
        >
          {" "}
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/Projects") setActiveItem("Projects");
    if (pathname === "/Resume") setActiveItem("Resume");
  }, []);

  return (
    <div className="flex justify-between px-5 my-3 py3">
      <span className="text-xl font-bold border-b-4 border-lightGreen text-lightGreen md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg ">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/Projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/Resume"
        />
      </div>
    </div>
  );
}

export default Navbar;
