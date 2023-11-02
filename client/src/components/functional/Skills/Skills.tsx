import { useState, useEffect } from "react";
import styles from "./Skills.module.scss";
import svgHtml5 from "@/svg/html5.svg";
import svgCss3 from "@/svg/css3.svg";
import svgSass from "@/svg/sass.svg";
import svgJavascript from "@/svg/javascript.svg";
import svgReact from "@/svg/react.svg";
import svgNext from "@/svg/nextjs.svg";
import svgNode from "@/svg/nodejs.svg";
import svgExpress from "@/svg/express.svg";
import Image from "next/image";
import viewTransition from "@/utils/viewTransition";

const Skills = () => {
  const [stateListSkill] = useState({
    skills: [
      {
        title: "Html5",
        img: svgHtml5,
      },
      {
        title: "Css3",
        img: svgCss3,
      },
      {
        title: "Sass",
        img: svgSass,
      },
      {
        title: "Javascript",
        img: svgJavascript,
      },
      {
        title: "React.js",
        img: svgReact,
      },
      {
        title: "Next.js",
        img: svgNext,
      },
      {
        title: "Node.js",
        img: svgNode,
      },
      {
        title: "Express",
        img: svgExpress,
      },
    ],
    details: [
      "Mysql",
      "Mongodb",
      "Flexbox",
      "Grid",
      "TypeScript",
      "Xlsx",
      "Html-pdf",
      "Multer",
      "Hooks",
      "Context",
      "Redux",
      "Zustand",
      "Atomic Design",
      "Axios",
      "Antd",
      "MVC",
      "Git",
      "Styled",
      "Socketio",
      "Reactrouterdom",
      "React-scroll",
      "jsonwebtoken",
      "ts-node",
    ],
  });

  useEffect(() => {
    viewTransition();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1>Skills</h1>
        <div>
          {stateListSkill.skills.map((list: any, index: number) => (
            <div key={index}>
              <h2>{list.title}</h2>
              <Image alt={list.title} src={list.img} />
            </div>
          ))}
        </div>
        <div>
          {stateListSkill.details.map((list: any, index: number) => (
            <h3 key={index}>{list}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
