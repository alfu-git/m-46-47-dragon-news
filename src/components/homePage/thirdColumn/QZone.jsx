import Image from "next/image";
import React from "react";
import Swimming from "@/assets/swimming.png";
import Class from "@/assets/class.png";
import Playground from "@/assets/playground.png";

const QZone = () => {
  return (
    <div className="my-5">
      <div className="mb-5 p-3.75 bg-[#F3F3F3]">
        <h5 className="mb-5 text-[#403F3F] text-xl font-semibold">Q-Zone</h5>

        <div className=" flex flex-col gap-5">
          <div>
            <Image
              src={Swimming}
              width={258}
              height={220}
              alt="A kid swim in a swimming pool"
            />
          </div>

          <div>
            <Image
              src={Class}
              width={258}
              height={220}
              alt="A baby classroom"
            />
          </div>

          <div>
            <Image
              src={Playground}
              width={258}
              height={220}
              alt="Many kids are playing in a playground"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QZone;
