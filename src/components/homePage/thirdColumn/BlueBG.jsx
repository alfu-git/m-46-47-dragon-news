import React from "react";
import Image from "next/image";
import BlueBg from "@/assets/bg.png";

const BlueBG = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Image src={BlueBg} width={267} height={509} alt="A blue color bg" />
      </div>
    </div>
  );
};

export default BlueBG;
