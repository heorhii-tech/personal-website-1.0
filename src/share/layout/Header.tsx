// components/Header.js
import React from "react";
import HeaderNav from "./HeaderNav";
import { HeaderConfig } from "../common/types";
interface Props {
        logo: React.ReactNode;
        config: HeaderConfig;
    }
export default function Header({logo, config}: Props) {
    return (
      <header className="container header-wrapper">
       {logo}
       {/* <HeaderNav navigation={config.navigation} /> */}
      </header>
    );
  }