import Image from "next/image";
import React from "react";
import CommentSection from "../components/CommentSection";

const Feed = ({ title, description }) => {
  return (
    <div className="w-[800px] h-fit p-5 border border-gray-300 rounded-3xl mx-10 bg-[#323232] mb-10">
      <div className="pl-5  flex text-white items-center">
        <img
          className=" h-[50px] w-[50px] overflow:hidden rounded-full"
          src="../assets/LogoAv.jpg"
          alt="logo"
        />
        <h className="ml-3 mt-4 text-xl">Username</h>
      </div>

      <div className="pl-20 text-white ">
        <h1 className="text-2xl font-bold mt-4 mb-2">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
      <CommentSection />
    </div>
  );
};

export default Feed;
