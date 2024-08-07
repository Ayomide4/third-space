import Image from "next/image";
import star_filled from "../../public/assets/star_filled.svg";
import star_empty from "../../public/assets/star_empty.svg";

interface ReviewProps {
  name: string;
  rating: number;
  reviewText: string;
}

export default function Review(reviewInfo: ReviewProps) {
  return (
    <div className="flex w-full h-full">
      <div className="w-10 h-10 flex-shrink-0 bg-black rounded-full "></div>
      <div className="flex w-fit flex-col pl-2">
        <p>{reviewInfo.reviewText}</p>
        <span className="flex items-center">
          <span className="flex space-x-1">
            <Image src={star_filled} className="flex-1" alt="star filled" />
            <Image src={star_filled} className="flex-1 " alt="star filled" />
            <Image src={star_filled} className="flex-1 " alt="star filled" />
            <Image src={star_filled} className="flex-1 " alt="star filled" />
          </span>
        </span>
      </div>
    </div>
  );
}
