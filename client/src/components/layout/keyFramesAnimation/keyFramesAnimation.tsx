import { useNav } from "@/store/hooks";
import { useState, useEffect } from "react";

const KeyFramesAnimation = ({ children }: { children: any }) => {
  const { stateSyle } = useNav();
  const [stateAnimation, setStateAnimation] = useState("prueba");
  useEffect(() => {
    if (stateSyle) {
      setStateAnimation("prueba1");
    } else {
      setStateAnimation("prueba");
    }
  }, [stateSyle]);

  return (
    <div
      style={{
        animationName: stateAnimation,
        animationDuration: ".75s",
        animationIterationCount: 1,
        animationTimingFunction: "ease-in-out",
        width: "100%",
        height: "100%",
      }}
    >
      <style jsx>{`

  @keyframes prueba {
    0% {
      overflow:hidden;
      opacity: 0;
      transform: translate(0, 80%) ;
    }

    100% {    
      overflow:hidden;
     transform: translate(0, 0) ;
    }
  }
  @keyframes prueba1 {
    0% {
      overflow:hidden;
      transform: translate(0, 0) ;
    }
 
    100% {
      overflow:hidden;
      opacity: 0;
      transform: translate(0, -100%);
    }
 

`}</style>
      {children}
    </div>
  );
};

export default KeyFramesAnimation;
