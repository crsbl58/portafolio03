import { useEffect } from "react";
import styles from "./TextAnimation.module.scss";

const TextAnimation = ({ array = [] }: any) => {
  return (
    <div className={styles.container}>
      <h2>
        {array.map((list: any, index: number) => {
          let countFrames = 100 / array.length;

          let arrayFrames = [
            `
            opacity: 0;
            max-width: 0%;
            filter:blur(.15rem);
            `,
            `
            opacity: 1;
            max-width: 100%;
            filter:blur(0);
            `,
            `   
            opacity: 0;
            max-width: 0%;
            filter:blur(.15rem);
            `,
          ];

          let keyframe = ` 
          ${countFrames * index}%{     
           ${arrayFrames[0]}
          }
          ${countFrames * index + countFrames / 2}%{
            ${arrayFrames[1]}
          }
          ${countFrames * (index + 1)}%{
            ${arrayFrames[2]}
          }
          `;
          return (
            <span key={index}>
              <style jsx>{`
                span:nth-child(${index + 1}) {
                  color: ${list.backgroundColor};
                  animation-name: frameTextAnimation${index + 1};
                  animation-duration: ${array.length *3}s;
                  animation-iteration-count: infinite;
                  animation-timing-function: ease-in-out;
                }

                @keyframes frameTextAnimation${index + 1} {
                  ${keyframe}
                }
              `}</style>

              {list.title}
            </span>
          );
        })}
      </h2>
    </div>
  );
};

export default TextAnimation;
