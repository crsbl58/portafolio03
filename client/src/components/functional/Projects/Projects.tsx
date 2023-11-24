import { useEffect, useState } from "react";
import styles from "./Projects.module.scss";
import Image from "next/image";
import next from "@/svg/next.svg";
import expandMore from "@/svg/expand_more.svg";
import menu from "@/svg/menu.svg";
import gitHub from "@/svg/github.svg";
import deployed from "@/svg/deployed.svg";

import portafolio2022 from "../../../../public/img/portafolio2022.jpg";
import portafolio2023 from "../../../../public/img/portafolio2023.jpg";
import generatorExcelPdf from "../../../../public/img/generatorExcelPdf.jpg";
import calendar from "../../../../public/img/calendar.jpg";
import chat from "../../../../public/img/chat.jpg";
import crud from "../../../../public/img/crud.png";
import eCommerce from "../../../../public/img/eCommerce.png";
import analysisDdata from "../../../../public/img/analysisDdata.png";
import form from "../../../../public/img/form.jpg";
import design from "../../../../public/img/design.jpg";
import Imdb from "../../../../public/img/Imdb.jpg";
import apiCountries from "../../../../public/img/apiCountries.jpg";
import advertisingSign from "../../../../public/img/advertisingSign.jpg";
import apiImg from "../../../../public/img/apiImg.jpg";
import viewTransition from "@/utils/viewTransition";
import { url } from "inspector";

const Projects = () => {
  const [stateNav, setStateNav] = useState(false);
  const [stateListProjects, setStateListProjects] = useState({
    selectCurrent: 0,
    listPj: [
      {
        title: "Portafolio 1",
        link: [
          "https://portafolio-frontend-drab.vercel.app/",
          "https://github.com/crsbl/portafolioFrontend",
        ],
        technologies: [
          "Html5, ",
          "Css3, ",
          "React.js, ",
          "typeScript, ",
          "Node.js",
        ],
        img: portafolio2022,
        info: "Fue mi primer portafolio donde aprendí a crear imágenes SVG utilizando como herramienta Illustrator y a animarlas con CSS.",
      },
      {
        title: "Portafolio 2",
        link: [
          "https://portafolio02-crsbl.vercel.app/",
          "https://github.com/crsbl58/portafolio02",
        ],
        technologies: ["Css3, ", "Node, ", "Express, ", "React.js"],
        img: portafolio2023,
        info: "Mi segundo portafolio, donde pulí mis conocimientos con CSS, al igual que creé proyectos con Node.",
      },
      {
        title: "Generador pdfExcel",
        link: [
          "https://generador-pdf-excel.vercel.app/",
          "https://github.com/crsbl58/generadorPdfExcel/",
        ],
        technologies: ["Html5, ", "Css3, ", "React.js"],
        img: generatorExcelPdf,
        info: "Ejercicio donde reforcé el conocimiento aprendido, creando PDF y Excel.",
      },
      {
        title: "Calendario reserva",
        link: [
          "https://reservas-git-main-crsbl.vercel.app/",
          "https://github.com/crsbl/reservas",
        ],
        technologies: ["Html5, ", "Css3, ", "React.js"],
        img: calendar,
        info: "Ejercicio donde practiqué con fechas, creando un calendario para realizar reservas.",
      },
      {
        title: "Chat online",
        link: [
          "https://chat-u4ws.vercel.app/",
          "https://github.com/crsbl/chat",
        ],
        technologies: ["Html5, ", "Css3, ", "React.js, ", "SocketIo"],
        img: chat,
        info: "Ejercicio donde empecé a practicar con Socket.IO, realizando un chat grupal.",
      },
      {
        title: "Crud",
        link: [
          "https://crud-flax-zeta.vercel.app/",
          "https://github.com/crsbl/crud",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: crud,
        info: "Ejercicio donde creé un CRUD de ejemplo en el lado del frontend, incorporando notificaciones de acciones.",
      },
      {
        title: "E-commerce",
        link: [
          "https://e-commerce-delta-lovat.vercel.app/",
          "https://github.com/crsbl/e-commerce",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: eCommerce,
        info: "Ejercicio donde creé un sitio de comercio únicamente en la parte del frontend, utilizando localStorage y paginación.",
      },
      {
        title: "Analisis de ventas",
        link: [
          "https://sales-analysis.vercel.app/",
          "https://github.com/crsbl/SalesAnalysis",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: analysisDdata,
        info: "Ejercicio de análisis de ventas con distintos filtros aplicables.",
      },
      {
        title: "Formulario",
        link: [
          "https://formulario00.vercel.app/",
          "https://github.com/crsbl/formulario00",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: form,
        info: "Ejercicio de formulario que debe completarse con distintos pasos.",
      },
      {
        title: "Maqueta",
        link: [
          "https://test-propulso.vercel.app/#",
          "https://github.com/crsbl/Maqueta00",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: design,
        info: "Ejercicio de maquetación donde se utilizan Flexbox y Grid.",
      },
      {
        title: "Clon IMDb",
        link: [
          "https://prueba04.vercel.app/",
          "https://github.com/crsbl/prueba04",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: Imdb,
        info: "Ejercicio donde se creó un clon de la página de IMDb.",
      },
      {
        title: "Api paises",
        link: [
          "https://datos-pais.vercel.app/",
          "https://github.com/crsbl/InfoPais",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: apiCountries,
        info: "Ejercicio donde se estableció una conexión a una API que proporciona la lista de países.",
      },
      {
        title: "Letrero publicidad",
        link: [
          "https://cugat-publicidad-kleg.vercel.app/",
          "https://github.com/crsbl/cugatPublicidad",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: advertisingSign,
        info: "Ejercicio para una pantalla publicitaria con ofertas modificables.",
      },
      {
        title: "Api imagenes",
        link: [
          "https://test-seven-psi-61.vercel.app/",
          "https://github.com/crsbl/test",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: apiImg,
        info: "Ejercicio donde se estableció una conexión a una API que proporciona imágenes según la búsqueda.",
      },
    ],
  });
  const [stateAnimation, setStateAnimation] = useState({
    name: "",
  });

  const CardProject = ({ title = "", img = "", technologies = "", link = [] }: any) => {
    const [stateMenu, setStateMenu] = useState(false);

    return (
      <div
        style={{
          /*  viewTransitionName: stateViewTransition.cardProject.img, */
          animationName: stateAnimation.name,
          animationDuration: "1.5s",
          animationIterationCount: 1,
          animationTimingFunction: "liniar",
        }}
      >
        <style jsx>{`
          @keyframes prevSlider {
            0% {
              opacity: 0;
              transform: translate(-200%, 0);
            }

            100% {
              transform: translate(0, 0);
            }
          }

          @keyframes prevExitSlider {
            0% {
              transform: translate(0, 0);
            }

            100% {
              opacity: 0;
              transform: translate(200%, 0);
            }
          }

          @keyframes nextSlider {
            0% {
              opacity: 0;
              transform: translate(200%, 0);
            }

            100% {
              transform: translate(0, 0);
            }
          }

          @keyframes nextExitSlider {
            0% {
              transform: translate(0, 0);
            }

            100% {
              opacity: 0;
              transform: translate(-200%, 0);
            }
          }
          @keyframes navSlider {
            0% {
              opacity: 0;
            }
          }
        `}</style>
 <div>
          <h2>{title}</h2>
          <Image
            style={
              stateMenu
                ? { backgroundColor: "rgba(35, 62, 117, 0.589)" }
                : { backgroundColor: "" }
            }
            onClick={() => {
              setStateMenu(!stateMenu);
            }}
            src={menu}
            alt="menu"
          />
          <nav style={stateMenu ? { display: "flex" } : { display: "none" }}>
            <ul>
              <li
                onClick={() => {
                  window.open(link[0], "_blank");
                }}
              >
                <Image src={deployed} alt="deployed" />
                Deploy
              </li>
              <li
                onClick={() => {
                  window.open(link[1], "_blank");
                }}
              >
                <Image src={gitHub} alt="gitHub" />
                GitHub
              </li>
              <li>
                {technologies.map((list: any) => {
                  return list;
                })}
              </li>
            </ul>
          </nav>
        </div>
        <p>
            {stateListProjects.listPj[stateListProjects.selectCurrent].info}
          </p>
        <Image src={img} alt={title} />
       
      </div>
    );
  };

  const directionArrow = (type: string) => {
    switch (type) {
      case "prev":
        setStateAnimation({
          ...stateAnimation,
          name: "prevExitSlider",
        });
        setTimeout(() => {
          console.log("timeout");
          setStateAnimation({
            ...stateAnimation,
            name: "prevSlider",
          });

          stateListProjects.selectCurrent === 0
            ? setStateListProjects({
                ...stateListProjects,
                selectCurrent: stateListProjects.listPj.length - 1,
              })
            : setStateListProjects({
                ...stateListProjects,
                selectCurrent: stateListProjects.selectCurrent - 1,
              });
        }, 1400);

        break;
      case "next":
        setStateAnimation({
          ...stateAnimation,
          name: "nextExitSlider",
        });
        setTimeout(() => {
          setStateAnimation({
            ...stateAnimation,
            name: "nextSlider",
          });

          stateListProjects.selectCurrent ===
          stateListProjects.listPj.length - 1
            ? setStateListProjects({
                ...stateListProjects,
                selectCurrent: 0,
              })
            : setStateListProjects({
                ...stateListProjects,
                selectCurrent: stateListProjects.selectCurrent + 1,
              });
        }, 1400);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      <h1>Ejercicios</h1>
      <div>
        <div>
          <nav>
            <ul
              onClick={() => {
                setStateNav(!stateNav);
                setStateAnimation({
                  ...stateAnimation,
                  name: "",
                });
              }}
            >
              Lista
              <Image src={expandMore} alt={"expandMore"} />
            </ul>
            <ul style={stateNav ? { display: "grid" } : { display: "none" }}>
              {stateListProjects.listPj.map((list: any, index: number) => (
                <li
                  style={
                    stateListProjects.selectCurrent === index
                      ? { backgroundColor: " rgba(63, 74, 105, 0.521)" }
                      : { backgroundColor: "" }
                  }
                  onClick={() => {
                    setStateNav(!stateNav);
                    setStateListProjects({
                      ...stateListProjects,
                      selectCurrent: index,
                    });
                  }}
                  key={index}
                >
                  {list.title}
                </li>
              ))}
            </ul>
          </nav>
       
        </div>
        <div>
          <CardProject
            title={
              stateListProjects.listPj[stateListProjects.selectCurrent].title
            }
            img={stateListProjects.listPj[stateListProjects.selectCurrent].img}
            technologies={
              stateListProjects.listPj[stateListProjects.selectCurrent]
                .technologies
            }
            link={
              stateListProjects.listPj[stateListProjects.selectCurrent].link
            }
          />
          <button
            onClick={() => {
              directionArrow("prev");
            }}
          >
            <Image src={next} alt={"prev"} />
          </button>
          <button
            onClick={() => {
              directionArrow("next");
            }}
          >
            <Image src={next} alt={"next"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
