import Image from "next/image";
import styles from "./Home.module.scss";
import pcIcon from "@/svg/pcIcon.svg";
import svgIllustrations from "@/svg/code";
import { useEffect, useState } from "react";
import viewTransition from "@/utils/viewTransition";

import linkedinIcon from "@/svg/linkedinIcon.svg";
import gitHub from "@/svg/github.svg";

const Home = () => {
  useEffect(() => {
    viewTransition();
  }, []);

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
      </div>
    </div>
  );
};

export default Home;
