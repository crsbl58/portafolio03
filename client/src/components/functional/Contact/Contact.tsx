import { useEffect } from "react";
import viewTransition from "@/utils/viewTransition";
import styles from "./Contact.module.scss";
import Image from "next/image";

import mailIcon from "@/svg/mailIcon.svg";

const Contact = () => {
  useEffect(() => {
    viewTransition();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Contacto</h1>

      <div>
        <h3>
          <Image src={mailIcon} alt="linkedin" />
          Correo:
        </h3>
        <h3>z.edd36@gmail.com</h3>
      </div>
    </div>
  );
};

export default Contact;
