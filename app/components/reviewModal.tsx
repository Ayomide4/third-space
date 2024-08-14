import Image from "next/image";
import star_filled from "../../public/assets/star_filled.svg";
import star_empty from "../../public/assets/star_empty.svg";

export default function ReviewModal() {
  return (
    <div className="fixed w-full h-full bg-black bg-opacity-70 flex items-center justify-center px-4">
      <div className="flex flex-col w-full min-h-[80vh] bg-white rounded-md p-4 opacity-100">
        <form className="flex flex-col w-full h-full py-10">
          <h1 className="text-3xl font-semibold mb-4">Write a Review</h1>
          <h2 className="text-xl font-semibold mb-2">Rate the Space</h2>
          <div className="flex flex-row items-center mb-4">
            <Image src={star_filled} className="w-8 h-8" alt="star filled" />
            <Image src={star_filled} className="w-8 h-8" alt="star filled" />
            <Image src={star_filled} className="w-8 h-8" alt="star filled" />
            <Image src={star_filled} className="w-8 h-8" alt="star filled" />
            <Image src={star_filled} className="w-8 h-8" alt="star filled" />
          </div>
          <p className="text-xl font-semibold mb-2"> Review</p>
          <textarea className="rounded-lg bg-grey w-full min-h-[35vh] placeholder-text px-2 mb-4"></textarea>
          <div className="flex flex-row items-center w-full justify-between">
            <button className="w-[calc(50%-0.5rem)] h-10 bg-primary text-white text-center rounded-lg px-2">
              Submit
            </button>
            <button className="w-[calc(50%-0.5rem)]  h-10 bg-grey text-white text-center rounded-lg px-2">
              <p className="text-black">Cancel</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
