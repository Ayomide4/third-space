import Image from "next/image";
import location from "../public/assets/location_on.svg";
import glass from "../public/assets/glass.svg";
import cancel from "../public/assets/cancel.svg";
import Profile from "./components/profile";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background relative ">
      <div className="flex flex-row w-full justify-between">
        <h1 className="text-4xl font-semibold text-primary">Vibe Finder</h1>
        <Link href="/auth">
          <Profile background="grey" />
        </Link>
      </div>
      <div className="flex flex-row items-center mb-64 w-7/12">
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
          className="w-12 h-12 ml-4 cursor-pointer"
          src={location}
          alt="location"
        />
      </div>
    </main>
  );
}
