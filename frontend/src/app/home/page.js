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
  <section>
            {" "}
            <div
              className="modal"
              style={{ background: "black", color: "white", padding: "20px" }}
            >
              <h2>Title</h2>
              <input
                type="text"
                name="title"
                value={commentData.title}
                onChange={handleInputChange}
                style={{ marginBottom: "10px" }}
              />

              <h2>Description</h2>
              <textarea
                name="description"
                value={commentData.description}
                onChange={handleInputChange}
                style={{ marginBottom: "20px", width: "80%" }}
              />

              <button
                onClick={handleSubmit}
                style={{
                  background: "#14F713",
                  color: "black",
                  padding: "10px 20px",
                  cursor: "pointer",
                  borderRadius: "20px",
                }}
              >
                Submit
              </button>
            </div>
          </section>
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
