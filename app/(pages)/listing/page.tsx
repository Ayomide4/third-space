import Link from "next/link";
import Image from "next/image";
import Profile from "../../components/profile";
import star_filled from "../../../public/assets/star_filled.svg";
import star_empty from "../../../public/assets/star_empty.svg";
import Review from "../../components/review";
import ReviewModal from "../../components/reviewModal";
import heart from "../../../public/assets/Heart.svg";
import share from "../../../public/assets/Share.svg";

const cardInfo = {
  title: "Coffee Shops",
  description: "Find the best coffee shops in town",
  reviews: "4",
  distance: "0.5 mi",
  website: "https://www.google.com",
};

export default function ListingPage() {
  const reviewInfo = {
    name: "John Doe",
    rating: 4,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <aside className="hidden md:flex w-full items-center justify-between px-10 my-4">
        <Link href="/">
          <h1 className="text-4xl font-semibold text-primary">Vibe Finder</h1>
        </Link>
        <div>
          <Profile background="grey" />
        </div>
      </aside>
      <main className="flex flex-col md:flex-row w-full h-full p-4 md:px-10 md:mb-4 bg-background">
        <div className="w-full md:w-2/3 md:mr-2 flex mb-2">
          <div className="md:flex flex-col w-44 space-y-1 hidden">
            <div className="flex-1 bg-black rounded-xl"></div>
            <div className="flex-1 bg-black rounded-xl"></div>
            <div className="flex-1 bg-black rounded-xl"></div>
            <div className="flex-1 bg-black rounded-xl"></div>
            <div className="flex-1 bg-black rounded-xl"></div>
            <div className="flex-1 bg-black rounded-xl"></div>
          </div>
          <div className="flex bg-black rounded-xl w-full h-56 md:ml-1"></div>
        </div>
        <div className="w-full md:w-1/3 h-full md:border md:border-black rounded-xl">
          <div className="flex flex-col md:px-6 pt-2 w-full h-full ">
            <div className="flex flex-col mb-4 ">
              <div className="flex flex-row justify-between items-center">
                <h1 className="text-3xl text-primary mb-2">Coffee Shop</h1>
                <span className="flex items-center">
                  <Image src={heart} className="w-6 h-6 mr-4" alt="heart" />
                  <Image src={share} className="w-6 h-6" alt="share" />
                </span>
              </div>
              <span className="flex items-center mb-1">
                <p className="text-lg">{cardInfo.reviews}</p>
                <span className="flex items-center mb-1 ml-2">
                  <span className="flex space-x-1">
                    <Image
                      src={star_filled}
                      className="flex-1"
                      alt="star filled"
                    />
                    <Image
                      src={star_filled}
                      className="flex-1 "
                      alt="star filled"
                    />
                    <Image
                      src={star_filled}
                      className="flex-1 "
                      alt="star filled"
                    />
                    <Image
                      src={star_filled}
                      className="flex-1 "
                      alt="star filled"
                    />
                    <Image
                      src={star_empty}
                      className="flex-1 "
                      alt="star empty"
                    />
                  </span>
                </span>
              </span>
              <p>{cardInfo.description}</p>
              <span className="flex items-center"></span>
              <p>{cardInfo.website}</p>
            </div>
            <h1 className="text-2xl text-primary font-light mb-1">Reviews</h1>
            <div className="px-4 flex max-h-[calc(60vh-4rem)] flex-col space-y-4 overflow-y-scroll">
              <Review {...reviewInfo} />
              <Review {...reviewInfo} />
              <Review {...reviewInfo} />
              <Review {...reviewInfo} />
              <Review {...reviewInfo} />
              <Review {...reviewInfo} />
            </div>
          </div>
        </div>
        <div className="w-44 h-10 bg-black rounded-xl fixed inset-x-0 bottom-6 mx-auto flex items-center justify-center">
          <p className="text-white">Write Review</p>
        </div>
      </main>
      {/*<ReviewModal />*/}
    </div>
  );
}
