import Image from "next/image";
import Profile from "../../components/profile";
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
    <div className="flex flex-row min-h-screen">
      <aside className="hidden w-32 h-screen md:py-10 bg-primary md:flex flex-col items-center justify-between">
        <div className="flex items-center justify-center w-10 h-10 bg-grey rounded-full">
          <Image src={hamburger} className="w-6 h-6" alt="hamburger menu" />
        </div>
        <div className="">
          <Profile background="grey" />
        </div>
      </aside>
      <main className="flex flex-col-reverse w-full md:h-screen bg-background">
        <div className="md:pt-20 md:px-10 h-full flex flex-col md:w-5/12 md:h-screen ">
          <div className="flex flex-row w-full px-2 justify-between md:mb-10">
            <h1 className="text-4xl font-semibold hidden">Places</h1>
            <div className="flex flex-row items-center ">
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
          <div className="overflow-y-auto max-h-[calc(65vh-4rem)] md:h-5/6 px-2">
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
          className="w-full h-72 md:w-7/12 md:h-screen"
          alt="map"
        />
      </main>
    </div>
  );
}
