import { atom } from "recoil";

const darkModeState = atom({
  key: "isDarkMode",
  default: false,
});

export default darkModeState;
