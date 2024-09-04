import Image from "next/image";
import library from "../../public/assets/library.jpg";
import coffee from "../../public/assets/1418coffee.webp";
import pub from "../../public/assets/pub.png";
export default function Recommended() {
  return (
    <div className="flex border-2 border-red-800 w-full justify-evenly gap-20">
      <Image src={pub} className="flex-auto w-60 h-72 rounded" alt="pub" />
      <Image
        src={library}
        className="flex-auto w-72 h-72 rounded"
        alt="library"
      />
      <Image
        src={coffee}
        className="flex-auto w-72 h-72 rounded"
        alt="coffee"
      />
    </div>
  );
}
