// components/Header.js
import React from "react";
import { HeaderConfig } from "../common/types";
import BurgerMenu from "./BurgerMenu";

interface Props {
  logo: React.ReactNode;
  config: HeaderConfig;

}
export default function Header({ logo, config,  }: Props) {
  return (
    <header className="container header-wrapper">
      {logo}
      {/* <HeaderNav navigation={config.navigation} /> */}
      <BurgerMenu navigation={config.navigation} />
    </header>
  );
}
