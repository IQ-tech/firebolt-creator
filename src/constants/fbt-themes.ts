import BlueberryTheme from "@iq-firebolt/blueberry-theme";
import MaterialTheme from "@iq-firebolt/material-theme";

const fbtThemes = {
  blueberry: BlueberryTheme,
  material: MaterialTheme,
  emptyTheme: {},
};

export type AvailableThemes = keyof typeof fbtThemes;

export default fbtThemes;
