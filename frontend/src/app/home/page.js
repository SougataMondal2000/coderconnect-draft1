"use client";
import Image from "next/image";
import Feed from "../sections/Feed";
import Profile from "../sections/Profile";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  const [postData1, setPostData1] = useState();
  const [postData, setpostData] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setpostData({
      ...postData,
      [name]: value,
    });
  };

  useEffect(() => {
    axios
      .get("https://api.npoint.io/ee66cc4303522a111fcd")
      .then((res) => setPostData1(res.data))
      .catch((err) => console.log(err, "Error fetching error!"));
  }, []);

  const handleSubmit = () => {
    postData.title === "" || postData.description === ""
      ? alert("Post can't be blank!")
      : console.log("Form Data:", postData) ??
        setModal(false) ??
        setpostData({ title: "", description: "" });
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
              onClick={handleModal}
            ></Button>
          </div>
          {modal === true && (
            <section>
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
                <section>
                  <div className="fixed flex justify-center items-center top-0 left-0 w-full h-screen z-60">
                    <div className="p-20 rounded-lg shadow-md bg-white">
                      <div className="flex justify-center items-center">
                        <h2 className="text-2xl font-semibold mb-4">Title</h2>
                      </div>
                      <input
                        type="text"
                        name="title"
                        value={postData.title}
                        onChange={handleInputChange}
                        className="w-full mb-4 border rounded-md p-2"
                      />
                      <h2 className="text-2xl font-semibold mb-4">
                        Description
                      </h2>
                      <textarea
                        name="description"
                        value={postData.description}
                        onChange={handleInputChange}
                        className="w-full h-20 mb-4 border rounded-md p-2"
                      />
                      <div className="flex justify-center items-center">
                        <Button
                          onClick={handleSubmit}
                          label={"Post"}
                          bgColor={"#14F713"}
                          textColor={"black"}
                        ></Button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          )}
        </div>
        <section className="h-[85vh] mt-10 scrollbar-thin overflow-y-scroll">
          {postData.length > 0 &&
            postData?.map((item, id) => (
              <Feed
                key={id}
                title={item.title}
                description={item.description}
              />
            ))}
          {postData1?.map((item, id) => (
            <Feed key={id} title={item.prompt} description={item.query} />
          ))}
        </section>
      </section>
    </main>
  );
}
