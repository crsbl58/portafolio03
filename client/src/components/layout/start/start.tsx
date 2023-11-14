import styles from './start.module.scss'
import { useEffect, useState } from "react";


const Star = () => {
  const [stateStars, setStateStars] = useState<any>([]);

  useEffect(() => {
    let array = [];
    const resposive00 = window.innerWidth > 600;
    for (let i = 0; i < (resposive00 ? 300 : 60); i++) {
      let coordinatedLeftStar = Math.floor(Math.random() * 99 + 1);
      let coordinatedToptStar = Math.floor(Math.random() * 99 + 1);
      let coordinatedSizeStar = Math.floor(Math.random() * 1 + 1);
      let durationAnimationStar = resposive00
        ? Math.floor(Math.random() * 3 + 1)
        : Math.floor(Math.random() * 7 + 1);
      let animationTrueOrFalse = Math.floor(Math.random() * 2 + 1);
      array.push([
        [i],
        [coordinatedLeftStar],
        [coordinatedToptStar],
        [coordinatedSizeStar],
        [animationTrueOrFalse === 1 ? durationAnimationStar : ""],
      ]);
    }
    setStateStars(array);
    console.log(stateStars);
  }, []);

  return (
    <>
      {stateStars.map((stars: any) => (
        <div
        className={styles.container}
          key={stars[0]}
          style={{
            width: `0.${stars[3]}rem`,
            height: `0.${stars[3]}rem`,
            left: `${stars[1]}vw`,
            top: `${stars[2]}vh`,
            animationDuration: `0.${stars[4]}s`,
          }}
  
        ></div>
      ))}
    </>
  );
};

export default Star;
