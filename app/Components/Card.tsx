import React from "react";
import { cardsData } from "../utils";

const CardSection = () => {
  return (
    <div className="3xl:mt-12">
      <h2 className="text-center bold-20">Our Service</h2>
      <div className=" flex cursor-pointer justify-center gap-4  py-16">
        {cardsData.map((item) => (
          <div
            key={item.index}
            className="w-[24rem] px-6 py-6 m-2 rounded-lg shadow-2xl hover:shadow-md transition border duration-300"
          >
            {item.icon}
            <div className="mt-6 flex flex-col gap-3">
              <h1 className="bold-16">{item.title}</h1>
              <span className="regular-12">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
