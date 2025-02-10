"use client";

import * as React from "react";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {  Menu } from "lucide-react";
import { HeaderConfig } from "../common/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BurgerMenu = ({
  navigation,
}: {
  navigation: HeaderConfig["navigation"];
}) => {
  // State to control the drawer's open/close status
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger onClick={() => setIsOpen(true)}>
        <Menu style={{width: "38px", height: "38px"}} className=" text-white dark:text-zinc-200" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          {/* Trigger close on link click */}
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link style={{ backgroundColor: "black", width: "100%",padding: "10px",textAlign: "center" }}  href={item.link} type="button" key={item.id} variant="outline" onClick={handleClose}>
                {item.text}
              </Link>
            ))}
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BurgerMenu;
