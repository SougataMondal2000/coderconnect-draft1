import React from "react";

const Feed = () => {
  return <div className="h-[200px] w-[800px] border border-gray-300 rounded-3xl bg-[#323232]">

    <div className="pl-5 pt-5 flex text-white">
      <img className=" h-[50px] w-[50px] overflow:hidden rounded-full" src="../assets/LogoAv.jpg" alt="logo" />
      <span className="ml-3 mt-4 text-xl">Username</span>
    </div>

    <div className="pl-20 text-white">
      <h1>hello</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae ex hic aliquam fugit accusamus deserunt nesciunt quidem minima nostrum optio ipsam, ullam adipisci quibusdam laborum impedit dolorem quis ducimus.</p>
    </div>

  </div>;
};

export default Feed;
