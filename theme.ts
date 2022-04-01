import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors = {
  dark: {
    900: "#101113",
    800: "#141517",
    700: "#1A1B1E",
    600: "#25262B",
    500: "#2C2E33",
    400: "#373A40",
    300: "#5C5F66",
    200: "#909296",
    100: "#A6A7AB",
    50: "#C1C2C5",
  },
};



const theme = extendTheme({
  config,
  colors,
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('#fff', colors.dark[900])(props),
      },
    }),
  },
});

export default theme;
