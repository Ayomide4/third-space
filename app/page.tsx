import Image from "next/image";
import location from "../public/assets/location_on.svg";
import glass from "../public/assets/glass.svg";
import cancel from "../public/assets/cancel.svg";
import person from "../public/assets/person.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background relative ">
      <div className="flex flex-row w-full justify-between">
        <h1 className="text-4xl font-semibold text-primary">Vibe Finder</h1>
        <div className="flex flex-col items-center justify-center w-10 h-10 border-black border bg-grey rounded-3xl self-start">
          <Image className="w-6 h-6 " src={person} alt="person" />
        </div>
      </div>
      <div className="flex flex-row items-center mb-52 w-7/12">
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
