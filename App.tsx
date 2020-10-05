console.disableYellowBox = true;

import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "@shopify/restyle";

import { LoadAssets, theme } from "./src/components";
import { RootNav } from "./src/navigation";
import { Provider } from "./src/context/context";

const fonts = {
  "Poppins-Bold": require("./assets/fonts/poppins.bold.ttf"),
  "Poppins-Regular": require("./assets/fonts/poppins.regular.ttf"),
};

const assets = [
  require("./assets/products/product1.png"),
  require("./assets/products/product2.png"),
  require("./assets/products/product3.png"),
  require("./assets/products/product4.png"),
  require("./assets/products/product5.png"),
  require("./assets/products/product6.png"),
  require("./assets/products/product7.png"),
  require("./assets/products/product8.png"),
  require("./assets/forgotPassword.png"),
  require("./assets/banner1.jpeg"),
  require("./assets/banner2.jpeg"),
  require("./assets/img1.png"),
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts, assets }}>
        <Provider>
          <RootNav />
          <StatusBar backgroundColor={theme.colors.white} />
        </Provider>
      </LoadAssets>
    </ThemeProvider>
  );
}
