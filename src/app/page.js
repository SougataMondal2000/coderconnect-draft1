import Image from "next/image";
import Feed from "./sections/Feed";
import Profile from "./sections/Profile";

export default function Home() {
  return (
    <main className="ml-44 flex  h-[100vh]">
      <Profile />
      <section className="h-[100vh] overflow-y-scroll">
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
      </section>
    </main>
  );
}
