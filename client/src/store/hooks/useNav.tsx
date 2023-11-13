import { shallow } from "zustand/shallow";
import { navStore } from "../useNav";

const useNav = () => {
  const { stateSyle } = navStore(
    (state) => ({
      stateSyle: state.stateSyle,
    }),
    shallow
  );
  const { changeState } = navStore();

  return {
    stateSyle,
    changeState,

  };
};

export default useNav;
