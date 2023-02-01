import React, { useEffect, useState } from "react";
import { devSkills } from "../../constants/skills";
import Skill from "./Skill";

const Skills = () => {

    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [javascript, setJavascript] = useState(0);
    const [react, setReact] = useState(0);
    const [node, setNode] = useState(0);
    const [git, setGit] = useState(0);
  
  const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill } =
    devSkills;

    useEffect(() => {
        const timer = setInterval(() => {
          setHtml((oldProgress) => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 75);
          });
          setCss((oldProgress) => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 60);
          });
          setJavascript((oldProgress) => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 60);
          });
          setReact((oldProgress) => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 50);
          });
          setNode((oldProgress) => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 0);
          });
          setGit((oldProgress) => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 30);
          });
        }, 200);
        return () => {
          clearInterval(timer);
        };
      }, []);

  return (
    <>
      <Skill
        name={htmlSkill.name}
        icon={htmlSkill.icon}
        color={htmlSkill.color}
        value={html}
      />

      <Skill
        name={cssSkill.name}
        icon={cssSkill.icon}
        color={cssSkill.color}
        value={css}
      />
      <Skill
        name={jsSkill.name}
        icon={jsSkill.icon}
        color={jsSkill.color}
        value={javascript}
      />
      <Skill
        name={reactSkill.name}
        icon={reactSkill.icon}
        color={reactSkill.color}
        value={react}
      />
      <Skill
        name={nodeSkill.name}
        icon={nodeSkill.icon}
        color={nodeSkill.color}
        value={node}
      />
      <Skill
        name={gitSkill.name}
        icon={gitSkill.icon}
        color={gitSkill.color}
        value={git}
      />
    </>
  );
};

export default Skills;
