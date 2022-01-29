import React from "react";

interface IIcaItem {
  img: string;
  alt: string;
}

const IcanCard = (): JSX.Element => {
  const logoList: IIcaItem[] = [
    { img: require("../../assets/img/logos/atom.png").default, alt: "atom" },
    { img: require("../../assets/img/logos/css.png").default, alt: "css" },
    { img: require("../../assets/img/logos/elixir.png").default, alt: "elixir" },
    { img: require("../../assets/img/logos/figma.png").default, alt: "figma" },
    { img: require("../../assets/img/logos/git.png").default, alt: "git" },
    { img: require("../../assets/img/logos/github.png").default, alt: "github" },
    { img: require("../../assets/img/logos/gitlab.png").default, alt: "gitlab" },
    { img: require("../../assets/img/logos/html.png").default, alt: "html" },
    { img: require("../../assets/img/logos/java.png").default, alt: "java" },
    {
      img: require("../../assets/img/logos/javascript.png").default,
      alt: "javascript",
    },
    { img: require("../../assets/img/logos/mysql.png").default, alt: "mysql" },
    { img: require("../../assets/img/logos/npm.png").default, alt: "npm" },
    { img: require("../../assets/img/logos/oracle.png").default, alt: "oracle" },
    { img: require("../../assets/img/logos/react.png").default, alt: "react" },
    { img: require("../../assets/img/logos/tomcat.png").default, alt: "tomcat" },
    {
      img: require("../../assets/img/logos/typescript.png").default,
      alt: "typescript",
    },
    { img: require("../../assets/img/logos/vs-code.png").default, alt: "vs-code" },
    { img: require("../../assets/img/logos/vue-js.png").default, alt: "vue-js" },
  ];
  const icanItemList = logoList.map((item) => (
    <img
      key={item.alt}
      src={item.img}
      className="i-can-item__img"
      alt={item.alt}
    />
  ));

  return <>{icanItemList}</>;
};

export default IcanCard;
