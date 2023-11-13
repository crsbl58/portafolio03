import { create } from 'zustand'


interface navState {
  stateSyle: boolean;
  error: boolean;
  changeState: (stateAnimation: boolean) => void;
  reset: () => void;
  resetAll: () => void;
}
const initialDataStore = {
  id: 0,
  name: "",
  address: "",
  district: "",
  backgroundColor: "",
  color: "",
  shortname: "",
};

export const navStore = create<navState>((set, get) => ({
  stateSyle: false,
  error: false,
  changeState: async (stateAnimation) => {
    try {
      set((state) => ({ ...state, stateSyle: stateAnimation }));
    } catch (e) {
      set((state) => ({ ...state, error: true }));
    }
  },

  reset: () =>
    set((state) => ({
      ...state,
      stateSyle: false,
      loading: false,
      error: false,
    })),

  resetAll: () => set({}, true),
}));
