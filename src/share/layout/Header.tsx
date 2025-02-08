// components/Header.js
import React from "react";
import { HeaderConfig } from "../common/types";
interface Props {
        logo: React.ReactNode;
        config: HeaderConfig;
    }
export default function Header({logo,}: Props) {
    return (
      <header className="container header-wrapper">
       {logo}
       {/* <HeaderNav navigation={config.navigation} /> */}
      </header>
    );
  }