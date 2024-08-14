import Image from "next/image";
import star_filled from "../../public/assets/star_filled.svg";
import star_empty from "../../public/assets/star_empty.svg";

export default function Card(props: any) {
  return (
    <div className="flex flex-row h-44 md:h-52 w-full ">
      <Image src={props.image} className="w-2/5 h-40 object-cover" alt="map" />
      <aside className="w-full h-full bg-background ml-4 ">
        <h2 className="text-2xl md:text-lg text-primary font-semibold">
          {props.title}
        </h2>
        <p>{props.description}</p>
        <span className="flex flex-row items-center">
          <p className="mr-1">{props.reviews}</p>
          <Image
            src={star_filled}
            className="md:w-4 md:h-4"
            alt="star filled"
          />
          <Image src={star_filled} className="w-4 h-4" alt="star filled" />
          <Image src={star_filled} className="w-4 h-4" alt="star filled" />
          <Image src={star_filled} className="w-4 h-4" alt="star filled" />
          <Image src={star_empty} className="w-4 h-4" alt="star empty" />
        </span>
        <span className="flex flex-row items-center">
          <p className="mr-2">{props.distance}</p>
          <p>{props.location}</p>
        </span>
      </aside>
    </div>
  );
}
