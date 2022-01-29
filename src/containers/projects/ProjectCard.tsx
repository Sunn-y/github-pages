import React from "react";
import ProjectItem, {
  IProjectItem,
} from "../../components/projects/ProjectItem";

const ProjectCard = (): JSX.Element => {
  const projectItemList: IProjectItem[] = [
    {
      name: "Edgehub-i",
      img: require("../../assets/img/icons/clock.png").default,
      alt: "edgehub",
      category: "Dynamic Web Apps",
      tag: ["Vue.js", "Vuex"],
    },
  ];

  const projectItemGroup = projectItemList.map((item) => (
    <ProjectItem
      key={item.alt}
      name={item.name}
      img={item.img}
      alt={item.alt}
      category={item.category}
      tag={item.tag}
    />
  ));

  return <>{projectItemGroup}</>;
};

export default ProjectCard;
