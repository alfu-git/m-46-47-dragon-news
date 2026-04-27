import React from "react";
import Image from "next/image";
import HeaderLogo from "@/assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <section className="mt-12.5 mb-7.5">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-5">
          <Image src={HeaderLogo} width={470} height={60} alt="Header Logo" />
        </div>

        <p className="mb-2.5 text-[#706F6F] text-lg">
          Journalism Without Fear or Favour
        </p>

        <div className="flex gap-1 text-xl font-medium">
          <p className="text-[#403F3F]">{format(new Date(), "EEEE,")}</p>
          
          <p className="text-[#706F6F]">
            {format(new Date(), "MMMM dd, yyyy")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
