import Image from "next/image";
import location from "../public/assets/location_on.svg";
import glass from "../public/assets/glass.svg";
import cancel from "../public/assets/cancel.svg";
import Profile from "./components/profile";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10  bg-background relative ">
      <div className="flex flex-col w-full ">
        <Link href="/auth" className="w-fit self-end mb-20">
          <Profile background="grey" />
        </Link>
        <h1 className="text-3xl font-semibold text-primary text-center">
          Vibe Finder
        </h1>
      </div>
      <div className="flex flex-col items-center mb-64 w-full">
        <div className="flex border-black border bg-grey rounded-md p-4 w-full h-16 items-center">
          <Image
            className="w-6 h-6 cursor-pointer"
            src={glass}
            alt="magnifying glass"
          />
          <input
            className="w-full h-full bg-transparent ml-4 focus:outline-none"
            placeholder="Search for a third space"
          />
          <Image className="w-6 h-6 cursor-pointer" src={cancel} alt="cancel" />
        </div>
        <Image
          className="w-12 h-12 ml-4 cursor-pointer hidden"
          src={location}
          alt="location"
        />
      </div>
    </main>
  );
}
