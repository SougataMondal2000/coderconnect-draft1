import Image from "next/image";
import React from "react";

const Feed = () => {
  return (
    <div className="w-[800px] h-fit p-5 border border-gray-300 rounded-3xl m-10 bg-[#323232]">
      <div className="pl-5  flex text-white items-center">
        <img
          className=" h-[50px] w-[50px] overflow:hidden rounded-full"
          src="../assets/LogoAv.jpg"
          alt="logo"
        />
        <h className="ml-3 mt-4 text-xl">Username</h>
      </div>

      <div className="pl-20 text-white ">
        <h1 className="text-2xl font-bold mt-4 mb-2">hello hi bye bye</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae
          ex hic aliquam fugit accusamus deserunt nesciunt quidem minima nostrum
          optio ipsam, ullam adipisci quibusdam laborum impedit dolorem quis
          ducimus.
        </p>
      </div>
    </div>
  );
};

export default Feed;
