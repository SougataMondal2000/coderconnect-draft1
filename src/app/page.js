import Image from "next/image";
import Feed from "./sections/Feed";
import Profile from "./sections/Profile";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="h-[100vh]">
      <nav className="flex justify-between items-center px-40 py-5">
        <h1 className="text-white text-xl font-bold">CoderConnect</h1>
        <Button label={"Log in"} bgColor={"white"} textColor={"black"}></Button>
      </nav>
      <section className="ml-44 flex">
        <Profile />
        <section className="h-[85vh] mt-10 overflow-y-scroll">
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
