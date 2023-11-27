import { useEffect, useState } from "react";
import styles from "./Nav.module.scss";
import { useRouter } from "next/router";

import homeIcon from "@/svg/homeIcon.svg";
import aboutIcon from "@/svg/person.svg";
import skillIcon from "@/svg/workIcon.svg";
import projectsIcon from "@/svg/description.svg";
import contactIcon from "@/svg/contacts.svg";

import Image from "next/image";
import { useNav } from "@/store/hooks";

const Nav = () => {
  const router = useRouter();
  const { changeState, stateSyle } = useNav();

  const [stateMenu, setStateMenu] = useState<any>(null);
  const [stateListNav, setStateListNav] = useState({
    CurrentNav: 0,
    list: [
      { name: "Inicio", route: "/home", icon: homeIcon },
      { name: "Sobre mi", route: "/about", icon: aboutIcon },
      { name: "Habilidades", route: "/skills", icon: skillIcon },
      { name: "Proyectos", route: "/projects", icon: projectsIcon },
      { name: "Contacto", route: "/contact", icon: contactIcon },
    ],
  });
  const [windowWidth, setWindowWidth] = useState<any>(null);

  const onClickNav = (list: any, index: number) => {
    if(stateListNav.CurrentNav !== index){
      changeState(true);
      console.log(stateSyle)
      setTimeout(() => {
        console.log(stateSyle)
        changeState(false);
        router.push(list.route);
        setStateListNav({ ...stateListNav, CurrentNav: index });
      }, 600);
     
      if (windowWidth < 700) {
        setStateMenu(false);
      }
    }
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth < 750) {
      setStateMenu(false);
    } else {
      setStateMenu(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <button
            onClick={() => {
              setStateMenu(!stateMenu);
            }}
          >
            Menu
          </button>
        </li>
        {stateMenu ? (
          <ul>
            {stateListNav.list.map((list: any, index: number) => {
              let widthHover =
                stateListNav.CurrentNav === index ? "115%" : "0%";
              return (
                <li key={index}>
                  <style jsx>{`
                    li::after {
                      background-color: #26323d;
                      content: "";
                      height: 100%;
                      position: absolute;
                      -webkit-transform: skew(15deg, 0);
                      transform: skew(15deg, 0);
                      transition: 0.3s;
                      width: ${widthHover};
                      z-index: 22;
                    }
                  `}</style>

                  <a
                    onClick={() => {
                      onClickNav(list, index);
                    }}
                  >
                    <Image src={list.icon} alt={list.name} />
                    {list.name}
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default Nav;
