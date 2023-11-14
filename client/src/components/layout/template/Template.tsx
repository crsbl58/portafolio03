import React, { useEffect, useState } from "react";
import Screen from "../screen";
import styles from "./template.module.scss";
import Nav from "@/components/ui/Nav/Nav";
import viewTransition from "@/utils/viewTransition";
import KeyFramesAnimation from "@/components/layout/keyFramesAnimation/keyFramesAnimation";
import Star from "../start/start";

const Template = ({ children }: { children: any }) => {
  return (
    <Screen>
      <Nav />

      <div className={styles.container}>
    {/*     <Star /> */}
        <KeyFramesAnimation> {children} </KeyFramesAnimation>
      </div>
    </Screen>
  );
};

export default Template;
