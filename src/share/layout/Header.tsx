// components/Header.js
"use client";
import React, { useEffect, useState } from "react";
import { HeaderConfig } from "../common/types";
import HeaderNav from "./HeaderNav";
import BurgerMenu from "./BurgerMenu";

interface Props {
  logo: React.ReactNode;
  config: HeaderConfig;
}

export default function Header({ logo, config }: Props) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLargeScreen(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsLargeScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <header className="container header-wrapper">
      {logo}
      {isLargeScreen ? (
        <HeaderNav navigation={config.navigation} />
      ) : (
        <BurgerMenu navigation={config.navigation} />
      )}
    </header>
  );
}
