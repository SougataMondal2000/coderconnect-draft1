"use client";
import Image from "next/image";
import Feed from "../sections/Feed";
import Profile from "../sections/Profile";
import Button from "../components/Button";
import { useState } from "react";

export default function Home() {
  const [commentData, setCommentData] = useState({
    title: "",
    description: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommentData({
      ...commentData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Form Data:", commentData);
  };
  return (
    <main className="h-[100vh]">
      <nav className="flex justify-between items-center px-40 py-5">
        <h1 className="text-[#14F713] text-2xl font-bold ">CoderConnect</h1>
        <Button label={"Log in"} bgColor={"white"} textColor={"black"}></Button>
      </nav>
      <section className="ml-44 flex">
        <div>
          <Profile />
          <div className="mb-10 flex justify-center items-center">
            <Button
              label={"Create Post"}
              bgColor={"white"}
              textColor={"black"}
            ></Button>
          </div>
          {/* raju */}
          <div
  style={{
    backgroundColor: "gray",
    borderRadius: "20px", 
    padding: "20px", 
  }}
>
  <section>
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
  <section>

  {/* Modal container */}
  <div className="fixed flex justify-center items-center top-0 left-0 w-full h-screen z-60">
    <div className="p-20 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Title</h2>
      <input
        type="text"
        name="title"
        value={commentData.title}
        onChange={handleInputChange}
        className="w-full mb-4 border rounded-md p-2"
      />
      <h2 className="text-2xl font-semibold mb-4">Description</h2>
      <textarea
        name="description"
        value={commentData.description}
        onChange={handleInputChange}
        className="w-full h-20 mb-4 border rounded-md p-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Submit
      </button>
    </div>
  </div>
</section>
</div>
  
  </section>
</div>

          
          {/* raju */}
        </div>
        <section className="h-[85vh] mt-10 scrollbar-thin overflow-y-scroll">
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
        </section>
      </section>
    </main>
  );
}
