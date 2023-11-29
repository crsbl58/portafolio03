import React, { useEffect, useState } from "react";
import Screen from "../screen";
import styles from "./template.module.scss";
import Nav from "@/components/ui/Nav/Nav";
import viewTransition from "@/utils/viewTransition";
import KeyFramesAnimation from "@/components/layout/keyFramesAnimation/keyFramesAnimation";
import Star from "../start/start";

import Image from "next/image";
import { url } from "inspector";
import Moon from "../moon/moon";
import Clouds from "@/components/ui/Clouds/Clouds";

const Template = ({ children }: { children: any }) => {
  return (
    <Screen>
      <Moon />
      <Nav />
      <Clouds />
      <div className={styles.container}> 
        {/*  <Star />  */}
        <KeyFramesAnimation> {children} </KeyFramesAnimation>
      </div>
    </Screen>
  );
};

export default Template;
