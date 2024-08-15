import Image from "next/image";
import Heart from "../../public/assets/heart.svg";
import Share from "../../public/assets/share.svg";

export default function QuickActions() {
  return (
    <div className="hidden w-72 h-16 bg-white rounded-xl fixed inset-x-0 bottom-6 mx-auto md:flex flex-row items-center justify-evenly border border-black">
      <div className="cursor-pointer select-none rounded-xl bg-primary text-white text-center w-1/2 h-10 flex items-center justify-center">
        Write Review
      </div>
      <div className="cursor-pointer select-none rounded-xl bg-grey w-12 h-10 flex items-center justify-center">
        <Image src={Heart} className="w-6 h-6" alt="heart" />
      </div>
      <div className="cursor-pointer select-none rounded-xl bg-grey w-12 h-10 flex items-center justify-center">
        <Image src={Share} className="w-6 h-6" alt="share" />
      </div>
    </div>
  );
}
