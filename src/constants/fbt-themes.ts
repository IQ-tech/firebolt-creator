import BlueberryTheme from "@iq-firebolt/blueberry-theme";
import MaterialTheme from "@iq-firebolt/material-theme";

const fbtThemes = {
  blueberry: {
    color: "geekblue",
    theme: BlueberryTheme
  },
  material: {
    color: "volcano",
    theme: MaterialTheme
  },
  emptyTheme: {
    color: "magenta",
    theme: {}
  },
};

export type AvailableThemes = keyof typeof fbtThemes;

export default fbtThemes;
