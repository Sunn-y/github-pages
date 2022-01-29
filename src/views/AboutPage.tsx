import React from "react";
import Avatar from "../assets/img/avatar.png";
import IamCard from "../containers/about/IamCard";
import IcanCard from "../containers/about/IcanCard";

const AboutPage = (): JSX.Element => {
  return (
    <>
      <div className="inline-section">
        <img src={Avatar} className="avatar" alt="avatar.png" width="500" />
      </div>
      <IamCard />
      <IcanCard />
    </>
  );
};

export default AboutPage;
