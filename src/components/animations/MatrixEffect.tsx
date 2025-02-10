'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@uidotdev/usehooks";

const MatrixEffect = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1280px)");
  const [columns, setColumns] = useState([]);
  const columnCount = isLargeScreen ? 34 : 25; // Количество столбцов
  const speed = 3; // Скорость падения

  useEffect(() => {
    const generateColumns = () => {
      return new Array(columnCount).fill(0).map((_, index) => ({
        id: index,
        characters: new Array(15) // Длина падающих символов
          .fill(0)
          .map(() => (Math.random() > 0.5 ? "1" : "0")),
        delay: Math.random() * 5,
      }));
    };

    setColumns(generateColumns());
  }, []);

  return (
    <div className=" hidden lg:flex w-full  bg-black overflow-hidden flex absolute top-0 left-0 z-[-1] mt-[25px] xl:mt-[100px]">
      {columns.map((column) => (
        <div key={column.id} className=" flex flex-col mx-1">
          {column.characters.map((char, index) => (
            <motion.span
              key={index}
              className="text-green-400 font-mono text-lg"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "100vh", opacity: [0, 1, 0] }}
              transition={{
                duration: speed,
                repeat: Infinity,
                repeatType: "loop",
                delay: column.delay + index * 0.2,
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixEffect;
