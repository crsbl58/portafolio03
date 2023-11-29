import styles from "./Clouds.module.scss";
import React, { useEffect, useState } from "react";
import svg from "@/svg/code";

const Clouds = () => {
  const [stateStars, setStateStars] = useState<string[][][]>([]);

  useEffect(() => {
    let array: any = [];
    for (let i = 0; i < 40; i++) {
      let coordinatedLeftClouds = Math.floor(Math.random() * 99 + 1);
      let coordinatedToptClouds = Math.floor(Math.random() * 30+ 1);
      let coordinatedSizeClouds = Math.floor(Math.random() * 10 + 1);
      let randomClouds = Math.floor(Math.random() * 7 + 1);
      let randomAnimationDuration = Math.floor(Math.random() * 16 + 1);
      let randomZIndex = Math.floor(Math.random() * 2 + 1);
      let zIndex = null;
      randomZIndex === 1 ? (zIndex = 16) : (zIndex = 14);

      array.push([
        [i],
        [coordinatedLeftClouds],
        [coordinatedToptClouds],
        [coordinatedSizeClouds],
        [svg().clouds[randomClouds - 1]],
        [randomAnimationDuration],
   
      ]);
    }
    setStateStars(array);
  }, []);
  return (
    <React.Fragment>
      <div className={styles.container}>
        {stateStars.map((clouds: any) => (
          <div
            key={clouds[0]}
            style={{
              animationDelay: `${clouds[5]}s`,
              width: `${clouds[3]}rem`,
              height: `${clouds[3]}rem`,
              left: `${clouds[1]}vw`,
              top: `${clouds[2]}rem`,
            }}
          >
            {clouds[4]}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Clouds;
