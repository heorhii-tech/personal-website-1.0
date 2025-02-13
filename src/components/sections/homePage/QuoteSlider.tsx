"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Quote } from "@share/common/types";

interface QuotesComponentProps {
  config: Quote[];
}

export default function QuoteComponent({
  config,
}: QuotesComponentProps) {
  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    if (config.length === 0) return;

    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % config.length);
        setFade(false);
      }, 400);
    }, 15000);

    return () => clearInterval(interval);
  }, [config.length]); // Следим за изменением `quotes.length`

  if (config.length === 0) {
    return <p className="text-center text-gray-500">No quotes available.</p>;
  }

  return (
    <div className="p-4 border border-[#27272a]  shadow-md text-center mt-[50px]">
      <p
        className={`text-[14px] lg:text-[16px]  transition-opacity duration-500 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        “{config[index]?.text}”
      </p>
      <p
        className={`text-text-main mt-2 transition-opacity duration-500 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        — {config[index]?.author}
      </p>
    </div>
  );
}
