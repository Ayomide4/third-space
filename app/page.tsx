import Image from "next/image";
import location from "../public/assets/location.svg";
import glass from "../public/assets/glass.svg";
import cancel from "../public/assets/cancel.svg";
import Profile from "./components/profile";
import Link from "next/link";

//TODO:
//- change color of location icon to primary
//- add how to section
//- add highlighted section

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 md:p-20 bg-background relative ">
      <div className="flex flex-col  w-full  md:justify-between md:flex-row-reverse md:mt-10 md:items-center">
        <Link href="/auth" className="w-fit self-end mb-20 md:mb-0">
          <Profile background="grey" />
        </Link>
        <h1 className="text-3xl font-semibold text-primary text-center md:text-left">
          Vibe Finder
        </h1>
      </div>
      <div className="flex flex-col items-center mb-64 w-full">
        <div className="flex border-black border bg-grey rounded-md p-4 w-full h-16 items-center md:w-9/12">
          <Image
            className="w-6 h-6 cursor-pointer"
            src={glass}
            alt="magnifying glass"
          />
          <input
            className="w-full h-full bg-transparent ml-4 focus:outline-none "
            placeholder="Search for a third space"
          />
          <Image
            className="w-10 h-10 ml-4 cursor-pointer hidden md:block"
            src={location}
            alt="location"
          />
        </div>
      </div>
    </main>
  );
}
