import Image from "next/image";
import Profile from "../../components/profile";
import person from "../../../public/assets/person.svg";
import map from "../../../public/assets/map.webp";
import caret_down from "../../../public/assets/caret-down.svg";
import coffee from "../../../public/assets/coffee_shop.jpg";
import hamburger from "../../../public/assets/hamburger.svg";
import Card from "../../components/card";

const cardInfo = {
  title: "Coffee Shop",
  description: "Local coffee that tastes like home.",
  reviews: "4",
  distance: "0.5 mi",
  location: "1111 Abrams Rd",
  image: coffee,
};

export default function SpacesPage() {
  return (
    <div className="flex p-2 flex-row min-h-screen md:bg-primary ">
      <aside className="hidden w-20 full md:flex md:flex-col md:items-center md:justify-between md:py-6 bg-primary ">
        <Image
          src={hamburger}
          className="w-6 h-6 cursor-pointer invert-[.92] sepia-[.02] saturate-[1.85] hue-rotate-[194deg] brightness-[1.07] contrast-[.98]"
          alt="hamburger menu"
        />
        <div className="">
          {/*<Profile background="grey" />
           */}

          <Image
            className="w-6 h-6 invert-[.92] sepia-[.02] saturate-[1.85] hue-rotate-[194deg] brightness-[1.07] contrast-[.98]"
            src={person}
            alt="person"
          />
        </div>
      </aside>
      <main className="  flex flex-col-reverse w-full md:h-[calc(100vh-1rem)] bg-background md:flex-row md:rounded-2xl">
        <div className="md:p-2 h-full flex flex-col md:w-5/12 ">
          <div className="flex flex-row w-full px-2 items-center justify-between md:mb-2">
            <h1 className="text-2xl font-semibold md:text-4xl">Spaces</h1>
            <div className="flex-row items-center hidden">
              <p className="text-lg font-semibold">Filter</p>
              <Image
                src={caret_down}
                className="w-10 h-10 mt-2"
                alt="caret down"
              />
            </div>
            <div className="flex flex-row items-center ">
              <p className="text-lg font-semibold">Sort</p>
              <Image
                src={caret_down}
                className="w-10 h-10 mt-2"
                alt="caret down"
              />
            </div>
          </div>
          <div className="overflow-y-auto max-h-[calc(65vh-4rem)] md:max-h-[calc(95vh-2rem)] px-2">
            <Card {...cardInfo} />
            <Card {...cardInfo} />
            <Card {...cardInfo} />
            <Card {...cardInfo} />
            <Card {...cardInfo} />
            <Card {...cardInfo} />
          </div>
        </div>
        <Image
          src={map}
          className="w-full h-72 md:w-7/12 md:h-full md:rounded-2xl"
          alt="map"
        />
      </main>
    </div>
  );
}
