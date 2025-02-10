// components/Header.js
"use client";
import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { HeaderConfig } from "../common/types";
import HeaderNav from "./HeaderNav";
import BurgerMenu from "./BurgerMenu";

interface Props {
  logo: React.ReactNode;
  config: HeaderConfig;

}
export default function Header({ logo, config,  }: Props) {
const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  return (
    <header className="container header-wrapper">
      {logo}
     
      {isLargeScreen ? <HeaderNav navigation={config.navigation} /> : <BurgerMenu navigation={config.navigation} />}
    </header>
  );
}
