import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "../utils";
import Button from "./Button";
import {AiOutlineUser} from "react-icons/ai"
import {BiMenu} from "react-icons/bi"
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" className="flex flex-col items-center">
        <Image src="/world-icon.png" alt="world-icon" width={40} height={40} />
        {/* <div className="regular-14 text-white flex flex-col items-center">
          <span>Travel</span> <span>Budz</span> 
        </div> */}
      </Link>
      <ul className="hidden h-full lg:flex gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all  hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon={<AiOutlineUser size={20} />}
          variant="btn_dark_green"
        />
      </div>

      <div className="inline-block cursor-pointer lg:hidden">
        <BiMenu size={30} />
      </div>
    </div>
  );
};

export default Navbar;
