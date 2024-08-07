import Link from "next/link";
import Image from "next/image";
import Profile from "../../components/profile";
import star_filled from "../../../public/assets/star_filled.svg";
import star_empty from "../../../public/assets/star_empty.svg";
import Review from "../../components/review";

const cardInfo = {
  title: "Coffee Shops",
  description: "Find the best coffee shops in town",
  reviews: "4",
  distance: "0.5 mi",
  location: "1111 Abrams Rd",
  website: "https://www.google.com",
};

//FIXME: height changes when addign more reviews to scrollable div

export default function ListingPage() {
  const reviewInfo = {
    name: "John Doe",
    rating: 4,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <aside className="flex w-full items-center justify-between px-10 my-4">
        <Link href="/">
          <h1 className="text-4xl font-semibold text-primary">Vibe Finder</h1>
        </Link>
        <div>
          <Profile background="grey" />
        </div>
      </aside>
      <main className="flex w-full h-full px-10 mb-4">
        <div className="w-2/3 mr-2 flex">
          <div className="flex flex-col w-44 space-y-1">
            <div className="flex-1 bg-black rounded-xl"></div>
            <div className="flex-1 bg-black rounded-xl"></div>
            <div className="flex-1 bg-black rounded-xl"></div>
            <div className="flex-1 bg-black rounded-xl"></div>
            <div className="flex-1 bg-black rounded-xl"></div>
            <div className="flex-1 bg-black rounded-xl"></div>
          </div>
          <div className="flex bg-black rounded-xl w-full ml-1"></div>
        </div>
        <div className="w-1/3 h-full border border-black rounded-xl">
          <div className="flex flex-col px-6 pt-2 w-full h-full ">
            <div className="flex flex-col mb-4 ">
              <h1 className="text-4xl text-primary mb-2">Coffee Shop</h1>
              <span className="flex items-center mb-1">
                <p className="text-lg">{cardInfo.reviews}</p>
                <div className="flex mb-1 ml-4">
                  <Image
                    src={star_filled}
                    className="w-4 h-4"
                    alt="star filled"
                  />
                  <Image
                    src={star_filled}
                    className="w-4 h-4"
                    alt="star filled"
                  />
                  <Image
                    src={star_filled}
                    className="w-4 h-4"
                    alt="star filled"
                  />
                  <Image
                    src={star_filled}
                    className="w-4 h-4"
                    alt="star filled"
                  />
                  <Image
                    src={star_empty}
                    className="w-4 h-4"
                    alt="star empty"
                  />
                </div>
              </span>
              <p>{cardInfo.description}</p>
              <span className="flex items-center">
                <p className="mr-2">{cardInfo.distance}</p>
                <p>{cardInfo.location}</p>
              </span>
              <p>{cardInfo.website}</p>
            </div>
            <h1 className="text-4xl text-primary font-light mb-2">Reviews</h1>
            <div className="px-4 flex flex-col space-y-1 h-full overflow-y-scroll">
              <Review {...reviewInfo} />
              <Review {...reviewInfo} />
              <Review {...reviewInfo} />
              <Review {...reviewInfo} />
              <Review {...reviewInfo} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
