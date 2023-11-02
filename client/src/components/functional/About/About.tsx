import { useState, useEffect } from "react";
import styles from "./About.module.scss";
import starIcon from "@/svg/starIcon.svg";
import educationLearning from "@/svg/educationLearning.svg";
import Image from "next/image";
import viewTransition from "@/utils/viewTransition";

const About = () => {
  const [stateProfile02] = useState([
    {
      title: "Actitud positiva",
      svg00: starIcon,
    },
    {
      title: "Control del estrés",
      svg00: starIcon,
    },
    {
      title: "Perseverancia",
      svg00: starIcon,
    },
    {
      title: "Creatividad",
      svg00: starIcon,
    },
    {
      title: "Flexibilidad",
      svg00: starIcon,
    },
    {
      title: "Empatía",
      svg00: starIcon,
    },
    {
      title: "Honestidad",
      svg00: starIcon,
    },
    {
      title: "Disciplina",
      svg00: starIcon,
    },
  ]);

  useEffect(() => {
    viewTransition();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1>Aspiraciones</h1>
        <h3>
          <Image alt="educationLearning" src={educationLearning}></Image>
          Mis aspiraciones profesionales son desarrollar constante aprendizaje,
          para estar siempre preparado y a la vanguardia, en las tecnologías más
          actuales y solicitadas, con el objetivo de perfilar como un
          profesional capaz y adecuado ante cualquier tarea.
        </h3>
      </div>
      <div>
        <h1>Aptitudes</h1>
        <div>
          {stateProfile02.map((list, index) => {
            return (
              <h3 key={index}>
                <Image src={list.svg00} alt={list.title}></Image>
                {list.title}
              </h3>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
