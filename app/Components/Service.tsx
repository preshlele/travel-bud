"use client";

import Image from "next/image";
import React from "react";
import { countUp } from "../utils";
import Counter from "./Counter";

const Service = () => {
  return (
    <div className="relative h-[30rem]">
      <div className="absolute inset-0">
        <Image src="/world-map.jpg" alt="world-map-bg" fill />
      </div>
      <div className="absolute top-20 flex flex-col items-center justify-center w-full">
        <h2 className="bold-20 text-center">
          We always try to give you <br /> the best service
        </h2>
        <span className="regular-12 text-center">
          We always try to make our customers happy. We provide all kinds of{" "}
          <br /> facilities. Your satisfaction is our main priority.
        </span>
      </div>
      <div className="flex items-center justify-center absolute bottom-[6rem] gap-16  w-full">
        {countUp.map((item) => (
          <div
            key={item.index}
            className=" rounded-md bg-white w-40 h-40 p-4 flex flex-col items-center justify-center gap-4"
          >
            <span className="text-green-900"> {item.icon}</span>
            <span className="bold-20">
              <Counter number={item.title} /> +
            </span>
            <span className="regular-12 text-center text-gray-500">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
