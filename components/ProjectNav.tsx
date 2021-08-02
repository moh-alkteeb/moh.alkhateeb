import { FC } from "react";
import { Category } from "../type";

export const NavItem: FC<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-lightGreen ";
  if (active === value) {
    className += " text-lightGreen";
  }
  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectNav: FC<{ handlerFilterCategory: Function; active: string }> = (
  props
) => {
  return (
    <div className="flex px-3 py-2 space-x-2 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="django" {...props} />
      <NavItem value="node" {...props} />
    </div>
  );
};

export default ProjectNav;
