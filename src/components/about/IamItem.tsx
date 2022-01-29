import React from "react";

// import img from "../../assets/img/icons/clock.png";

export interface IIamItem {
  title: string;
  img: string;
  alt: string;
  desc: string;
}

const IamItem = ({ title, img, alt, desc }: IIamItem): JSX.Element => {
  return (
    <>
      <div className="i-am-item">
        <img
          src={img}
          className="i-am-item__img"
          alt={alt}
        />
        <h2 className="i-am-item__title">{title}</h2>
        <div className="i-am-item__desc">{desc}</div>
      </div>
    </>
  );
};

export default IamItem;
