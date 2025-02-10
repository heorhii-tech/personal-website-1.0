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

import { X, Menu } from "lucide-react";
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
        <Menu className="h-6 w-6 text-white dark:text-zinc-200" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          {/* Trigger close on link click */}
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Button style={{ backgroundColor: "black", width: "100%" }} type="button" key={item.id} variant="outline" onClick={handleClose}>
                <Link href={item.link}>{item.text}</Link>
              </Button>
            ))}
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BurgerMenu;
