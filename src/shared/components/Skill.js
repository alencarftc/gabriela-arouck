import React from "react";
import style from "@sass/components/skill.module.scss";

const Skill = ({ title, icon, description, zoom = false }) => {
  return (
    <div className={`${style.root} ${zoom && style.zoom}`}>
      <img src={icon} alt={title} />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default Skill;
