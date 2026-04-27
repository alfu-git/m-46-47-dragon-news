import React from "react";
import FacebookLogo from "@/assets/fb.png";
import TwitterLogo from "@/assets/twitter.png";
import InstagramLogo from "@/assets/instagram.png";
import Image from "next/image";

const FindSection = () => {
  return (
    <div>
      <h5 className="mb-5 text-[#403F3F] text-xl font-semibold">Find Us On</h5>

      <div className="border-2 border-[#E7E7E7] rounded-md">
        <button className="btn shadow-none bg-transparent border-none h-18 gap-3 justify-start w-full">
          <div className="p-2.5 bg-[#F3F3F3] rounded-full">
            <Image
              src={FacebookLogo}
              width={20}
              height={20}
              alt="Facebook png"
            />
          </div>

          <span className="block text-[#706F6F] font-medium">Facebook</span>
        </button>

        <div className="border-t-2 border-[#E7E7E7] w-full"></div>

        <button className="btn shadow-none bg-transparent border-none h-18 gap-3 justify-start w-full">
          <div className="p-2.5 bg-[#F3F3F3] rounded-full">
            <Image src={TwitterLogo} width={20} height={20} alt="Twitter png" />
          </div>

          <span className="text-[#706F6F] font-medium">Twitter</span>
        </button>

        <div className="border-t-2 border-[#E7E7E7] w-full"></div>

        <button className="btn shadow-none bg-transparent border-none h-18 gap-3 justify-start w-full">
          <div className="p-2.5 bg-[#F3F3F3] rounded-full">
            <Image
              src={InstagramLogo}
              width={20}
              height={20}
              alt="Instagram png"
            />
          </div>

          <span className="text-[#706F6F] font-medium">Instagram</span>
        </button>
      </div>
    </div>
  );
};

export default FindSection;
