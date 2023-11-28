import Image from "next/image";
import styles from "./Home.module.scss";
import pcIcon from "@/svg/pcIcon.svg";
import svgIllustrations from "@/svg/code";
import { useEffect, useState } from "react";
import viewTransition from "@/utils/viewTransition";

import linkedinIcon from "@/svg/linkedinIcon.svg";
import gitHub from "@/svg/github.svg";
import TextAnimation from "@/components/ui/TextAnimation/TextAnimation";

const Home = () => {
  const [stateListSkill] = useState({
    skills: [
      {
        title: "React.js",
        backgroundColor: "aquamarine",
      },
      {
        title: "Sass",
        backgroundColor: "violet",
      },
      {
        title: "Express",
        backgroundColor: "rgb(155, 163, 163)",
      },
      {
        title: "Mysql",
        backgroundColor: "goldenrod",
      },
    ],
  });

  const cmdP =
    "C:\\Cristóbal\\Chile\\Sexta región\\Aiep: tec. Nivel Superior Programación Computacional";

  return (
    <div className={styles.container}>
      <div>
        <div>
          <h1>
            <Image alt="pc" width={80} height={80} src={pcIcon}></Image>
            Developer
          </h1>
          <h1>Cristóbal Ortega</h1>
        </div>

        <div>
          <TextAnimation array={stateListSkill.skills} />
          <Image
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/cristobal-ortega-290594216/",
                "_blank"
              );
            }}
            src={linkedinIcon}
            alt="linkedin"
          />
          <Image
            onClick={() => {
              window.open("https://github.com/crsbl58", "_blank");
            }}
            src={gitHub}
            alt="linkedin"
          />
        </div>
        <h2>
          me gusta tomar desafíos nuevos y seguir aprendiendo mucho más. Siempre
          se generan nuevas metas; es lo entretenido de la programación.
        </h2>
      </div>
      <div>
        <h3>Símbolo del sistema</h3>
        <p>{cmdP}</p>
      </div>
    </div>
  );
};

export default Home;
