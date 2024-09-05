import Image from "next/image";
import library from "../../public/assets/library.jpg";
import coffee from "../../public/assets/1418coffee.webp";
import pub from "../../public/assets/pub.png";
import white_star from "../../public/assets/white_star.svg";

export default function Recommended() {
  return (
    <div className="flex w-full justify-evenly ">
      <div className="relative">
        <div className="absolute bottom-2 left-2 bg-black rounded-lg p-2">
          <p className="text-white">Fillmore Pub</p>
        </div>
        <div className="absolute top-2 right-2 bg-accent rounded-lg p-2 flex items-center">
          <Image src={white_star} className="w-5 h-5 mb-1 mr-1" alt="star" />
          <p className="text-white">4.5</p>
        </div>
        <Image src={pub} className="w-60 h-60 rounded-lg" alt="pub" />
      </div>

      <div className="relative">
        <div className="absolute bottom-2 left-2 bg-black rounded-lg p-2">
          <p className="text-white">Library</p>
        </div>
        <div className="absolute top-2 right-2 bg-accent rounded-lg p-2 flex items-center">
          <Image src={white_star} className="w-5 h-5 mb-1 mr-1" alt="star" />
          <p className="text-white">4.5</p>
        </div>
        <Image src={library} className="w-60 h-60 rounded-lg" alt="library" />
      </div>

      <div className="relative">
        <div className="absolute bottom-2 left-2 bg-black rounded-lg p-2">
          <p className="text-white">1418 Coffee</p>
        </div>
        <div className="absolute top-2 right-2 bg-accent rounded-lg p-2 flex items-center">
          <Image src={white_star} className="w-5 h-5 mb-1 mr-1" alt="star" />
          <p className="text-white">4.5</p>
        </div>
        <Image src={coffee} className="w-60 h-60 rounded-lg" alt="coffee" />
      </div>
    </div>
  );
}
