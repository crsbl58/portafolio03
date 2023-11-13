import { ExtendedDocument } from "@/interface/config";

const viewTransition = (actionF: any = () => {}) => {
  let extendedDocument = document as ExtendedDocument;
  const transition= extendedDocument.startViewTransition(() => {
    return actionF();
  });

/*   transition.ready.then(() => {
    document.documentElement.animate(
      [
        { transform: "translateY(100%)" },
        { transform: "translateY(66%)" },
        { transform: "translateY(33%)" },
        { transform: "translateY(0px)" },
        { transform: "translateY(10px)" },
        { transform: "translateY(0px)" },
        { transform: "translateY(5px)" },
        { transform: "translateY(0)" }
      ],
      {
        duration: 2500,
        easing: "ease-in",
        pseudoElement: "::view-transition-new(homeContainer)"
      }
    );
  }); */

};
export default viewTransition;
