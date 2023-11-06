import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className=" h-[35rem] 3xl:h-[52rem] w-full flex flex-col justify-center items-center">
        
          <Image src="/hero-bg2.jpg" alt="hero-background" fill />
          <div className=" relative padding-container text-white">
            <div className="3xl:bold-80 bold-52  flex flex-col items-center ">
              <span>Your Imagination Is</span>
              <span> Your Only Limit</span>
            </div>
            <div className="flex flex-col items-center regular-18 mt-16">
              <span>
                We always try to make our customers happy. We provide all kinds
                of facilities.
              </span>
              <span>Your satisfaction is our main priority</span>
            </div>
            <div className="flex justify-center mt-8">
              <Button type="button" title="Discover more" variant="btn_green" />
            </div>
          </div>
       
      </section>
    </>
  );
};

export default Hero;
