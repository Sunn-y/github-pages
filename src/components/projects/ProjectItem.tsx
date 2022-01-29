import React from "react";

export interface IProjectItem {
  name: string;
  img: string;
  alt: string;
  category: string;
  tag: string[];
  show: boolean;
}

const ProjectItem = ({
  name,
  img,
  alt,
  category,
  tag,
  show,
}: IProjectItem): JSX.Element => {
  const tagList = tag.map((item, index) => (
    <div className="project-item__tag" key={index}>{item}</div>
  ));
  return (
    <>
      <div className="project-item">
        <img src={img} className="project-item__img" alt={alt} />
        <div className="project-item__title">{name}</div>
        <div className="project-item__category">{category}</div>
        {tagList}
      </div>
      {show && <div className="proeject-detail">details!!!!!!!!!!!!!</div>}
    </>
  );
};

export default ProjectItem;
