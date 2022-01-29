import React from "react";
import IamItem, { IIamItem } from "../../components/about/IamItem";

const IamCard = (): JSX.Element => {
  const iamItemList: IIamItem[] = [
    {
      title: "Positive",
      img: require("../../assets/img/icons/sun-flower.png").default,
      alt: "sun-flower.png",
      desc: "Description",
    },
    {
      title: "Curious",
      img: require("../../assets/img/icons/question.png").default,
      alt: "question.png",
      desc: "Description",
    },
    {
      title: "Enthusiastic",
      img: require("../../assets/img/icons/fire.png").default,
      alt: "fire.png",
      desc: "Description",
    },
    {
      title: "Challenging",
      img: require("../../assets/img/icons/search.png").default,
      alt: "search.png",
      desc: "Description",
    },
    {
      title: "Diligent",
      img: require("../../assets/img/icons/clock.png").default,
      alt: "clock.png",
      desc: "Description",
    },
    {
      title: "Fearless",
      img: require("../../assets/img/icons/health.png").default,
      alt: "health.png",
      desc: "Description",
    },
  ];

  const iamItemGroup = iamItemList.map((item) => (
    <IamItem
      key={item.alt}
      title={item.title}
      img={item.img}
      alt={item.alt}
      desc={item.desc}
    />
  ));

  return <>{iamItemGroup}</>;
};

export default IamCard;
