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

const Projects = () => {
  const [stateListProjects, setStateListProjects] = useState({
    selectCurrent: 0,
    stateNav: false,
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
      },
      {
        title: "Portafolio 2",
        link: [
          "https://portafolio02-crsbl.vercel.app/",
          "https://github.com/crsbl58/portafolio02",
        ],
        technologies: ["Css3, ", "Node, ", "Express, ", "React.js"],
        img: portafolio2023,
      },
      {
        title: "Generador pdfExcel",
        link: [
          "https://generador-pdf-excel.vercel.app/",
          "https://github.com/crsbl58/generadorPdfExcel/",
        ],
        technologies: ["Html5, ", "Css3, ", "React.js"],
        img: generatorExcelPdf,
      },
      {
        title: "Calendario reserva",
        link: [
          "https://reservas-git-main-crsbl.vercel.app/",
          "https://github.com/crsbl/reservas",
        ],
        technologies: ["Html5, ", "Css3, ", "React.js"],
        img: calendar,
      },
      {
        title: "Chat online",
        link: [
          "https://chat-u4ws.vercel.app/",
          "https://github.com/crsbl/chat",
        ],
        technologies: ["Html5, ", "Css3, ", "React.js, ", "SocketIo"],
        img: chat,
      },
      {
        title: "Crud",
        link: [
          "https://crud-flax-zeta.vercel.app/",
          "https://github.com/crsbl/crud",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: crud,
      },
      {
        title: "E-commerce",
        link: [
          "https://e-commerce-delta-lovat.vercel.app/",
          "https://github.com/crsbl/e-commerce",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: eCommerce,
      },
      {
        title: "Analisis de ventas",
        link: [
          "https://sales-analysis.vercel.app/",
          "https://github.com/crsbl/SalesAnalysis",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: analysisDdata,
      },
      {
        title: "Formulario",
        link: [
          "https://formulario00.vercel.app/",
          "https://github.com/crsbl/formulario00",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: form,
      },
      {
        title: "Maqueta",
        link: [
          "https://test-propulso.vercel.app/#",
          "https://github.com/crsbl/Maqueta00",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: design,
      },
      {
        title: "Clon IMDb",
        link: [
          "https://prueba04.vercel.app/",
          "https://github.com/crsbl/prueba04",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: Imdb,
      },
      {
        title: "Api paises",
        link: [
          "https://datos-pais.vercel.app/",
          "https://github.com/crsbl/InfoPais",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: apiCountries,
      },
      {
        title: "Letrero publicidad",
        link: [
          "https://cugat-publicidad-kleg.vercel.app/",
          "https://github.com/crsbl/cugatPublicidad",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: advertisingSign,
      },
      {
        title: "Api imagenes",
        link: [
          "https://test-seven-psi-61.vercel.app/",
          "https://github.com/crsbl/test",
        ],
        technologies: ["Html5, ", " Css3, ", " React.js"],
        img: apiImg,
      },
    ],
  });

  const stateViewTransitionName = {
    cardProject: {
      img: {
        next: "projectsCardProjectImgNext",
        prev: "projectsCardProjectImgPrev",
      },
      title: {
        next: "projectsCardProjectTitleNext",
        prev: "projectsCardProjectTitlePrev",
      },
    },
  };

  const [stateViewTransition, setStateViewTransition] = useState({
    cardProject: {
      img: stateViewTransitionName.cardProject.img.next,
      title: stateViewTransitionName.cardProject.title.next,
    },
  });

  const CardProject = ({ title = "", img = "", info = "", link = [] }: any) => {
    const [stateMenu, setStateMenu] = useState(false);

    return (
      <div style={{ viewTransitionName: stateViewTransition.cardProject.img }}>
        <Image src={img} alt={title} />
        <div>
          <h2
            style={{
              viewTransitionName: stateViewTransition.cardProject.title,
            }}
          >
            {title}
          </h2>
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
                {info.map((list: any) => {
                  return list;
                })}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  };

  const directionArrow = (type: string) => {
    setStateListProjects({
      ...stateListProjects,
      selectCurrent: stateListProjects.selectCurrent + 1,
    });

    switch (type) {
      case "prev":
        setStateViewTransition({
          ...stateViewTransition,
          cardProject: {
            img: stateViewTransitionName.cardProject.img.prev,
            title: stateViewTransitionName.cardProject.title.prev,
          },
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
        break;
      case "next":
        setStateViewTransition({
          ...stateViewTransition,
          cardProject: {
            img: stateViewTransitionName.cardProject.img.next,
            title: stateViewTransitionName.cardProject.title.next,
          },
        });
        stateListProjects.selectCurrent === stateListProjects.listPj.length - 1
          ? setStateListProjects({
              ...stateListProjects,
              selectCurrent: 0,
            })
          : setStateListProjects({
              ...stateListProjects,
              selectCurrent: stateListProjects.selectCurrent + 1,
            });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    viewTransition();
  }, []);
  
  return (
    <div className={styles.container}>
      <h1>Ejercicios</h1>
      <div>
        <div>
          <nav>
            <ul
              onClick={() => {
                setStateViewTransition({
                  ...stateViewTransition,
                  cardProject: { img: "", title: "" },
                });
                setStateListProjects({
                  ...stateListProjects,
                  stateNav: !stateListProjects.stateNav,
                });
              }}
            >
              Lista
              <Image src={expandMore} alt={"prev"} />
            </ul>
            <ul
              style={
                stateListProjects.stateNav
                  ? { display: "grid" }
                  : { display: "none" }
              }
            >
              {stateListProjects.listPj.map((list: any, index: number) => (
                <li
                  style={
                    stateListProjects.selectCurrent === index
                      ? { backgroundColor: " rgba(63, 74, 105, 0.521)" }
                      : { backgroundColor: "" }
                  }
                  onClick={() => {
                    setStateViewTransition({
                      ...stateViewTransition,
                      cardProject: { img: "", title: "" },
                    });
                    setStateListProjects({
                      ...stateListProjects,
                      stateNav: !stateListProjects.stateNav,
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
            info={
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
