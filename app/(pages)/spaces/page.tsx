import Image from "next/image";
import Profile from "../../components/profile";
import map from "../../../public/assets/map.webp";
import caret_down from "../../../public/assets/caret-down.svg";
import coffee from "../../../public/assets/coffee_shop.jpg";
import hamburger from "../../../public/assets/hamburger.svg";
import Card from "../../components/card";

const cardInfo = {
  title: "Coffee Shops",
  description: "Find the best coffee shops in town",
  reviews: "4",
  distance: "0.5 mi",
  location: "1111 Abrams Rd",
  image: coffee,
};

export default function SpacesPage() {
  return (
    <div className="flex flex-row">
      <aside className="w-32 h-screen py-10 bg-primary flex flex-col items-center justify-between">
        <div className="flex items-center justify-center w-10 h-10 bg-grey rounded-full">
          <Image src={hamburger} className="w-6 h-6" alt="hamburger menu" />
        </div>
        <div className="">
          <Profile background="grey" />
        </div>
      </aside>
      <main className="flex w-full h-screen bg-background ">
        <div className="pt-20 px-10 flex flex-col w-5/12 h-screen ">
          <div className="flex flex-row w-full justify-between mb-10">
            <h1 className="text-4xl font-semibold">Places</h1>
            <div className="flex flex-row items-center ">
              <p className="text-lg">Sort</p>
              <Image
                src={caret_down}
                className="w-10 h-10 mt-2"
                alt="caret down"
              />
            </div>
          </div>
          <Card {...cardInfo} />
          <Card {...cardInfo} />
          <Card {...cardInfo} />
          <Card {...cardInfo} />
        </div>
        <Image src={map} className="w-7/12 h-screen" alt="map" />
      </main>
    </div>
  );
}
