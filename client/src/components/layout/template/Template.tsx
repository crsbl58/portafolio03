import React, { useEffect, useState } from "react";
import Screen from "../screen";
import styles from "./template.module.scss";
import Nav from "@/components/ui/Nav/Nav";

const Template = ({ children }: { children: any }) => {
  return (
    <Screen>
      <Nav />
      <div className={styles.container}>{children}</div>
    </Screen>
  );
};

export default Template;
