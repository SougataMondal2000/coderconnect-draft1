import Image from "next/image";
import Feed from "./sections/Feed";
import Profile from "./sections/Profile";

export default function Home() {
  return (
    <main className="flex ">
      <Feed />
      <Profile />
    </main>
  );
}
