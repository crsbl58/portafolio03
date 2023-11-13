import React, { useEffect, useState } from "react";
import Screen from "../screen";
import styles from "./template.module.scss";
import Nav from "@/components/ui/Nav/Nav";
import viewTransition from "@/utils/viewTransition";
import KeyFramesAnimation from "@/components/layout/keyFramesAnimation/keyFramesAnimation";

const Template = ({ children }: { children: any }) => {
  /*   useEffect(() => {
    viewTransition();
  }, []); */

  return (
    <Screen>
      <Nav />

      <div className={styles.container}>
      <KeyFramesAnimation> {children} </KeyFramesAnimation> 
      </div>
    </Screen>
  );
};

export default Template;
