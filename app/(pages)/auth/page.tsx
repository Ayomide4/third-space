import Image from "next/image";
import Profile from "../../components/profile";
import google from "../../../public/assets/google.svg";
import github from "../../../public/assets/github.svg";
import Link from "next/link";

export default function AuthPage() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center p-2 bg-background relative">
      <div className="flex flex-col w-full m-2">
        <Link href="/">
          <h1 className="text-3xl font-semibold text-primary text-center ">
            Vibe Finder
          </h1>
        </Link>
        <div className="hidden">
          <Profile background="grey" />
        </div>
      </div>
      <div className="w-full md:h-96 flex flex-col items-center ">
        <form className="md:flex flex-col w-full md:w-72 h-full mb-8 ">
          <h2 className="text-text mb-2">register</h2>
          <input
            className="rounded-lg bg-grey w-full h-10 placeholder-text px-2 mb-2"
            placeholder="username"
          ></input>
          <input
            className="rounded-lg bg-grey w-full h-10 placeholder-text px-2 mb-2"
            placeholder="email"
          ></input>
          <input
            className="rounded-lg bg-grey w-full h-10 placeholder-text px-2 mb-2"
            placeholder="verify email"
          ></input>
          <input
            className="rounded-lg bg-grey w-full h-10 placeholder-text px-2 mb-2"
            placeholder="password"
          ></input>
          <input
            className="rounded-lg bg-grey w-full h-10 placeholder-text px-2 mb-2"
            placeholder="verify password"
          ></input>
          <button className="w-full md:w-72 h-10 bg-primary text-white text-left rounded-lg px-2">
            sign up
          </button>
        </form>

        <div className="flex flex-col w-full md:w-72 h-full md:mx-36 px-2">
          <form className="flex flex-col w-full h-full">
            <h2 className="text-text mb-2 md:mb-4">login</h2>
            <div className="flex flex-row w-full justify-between md:mb-10 mb-4">
              <div className="cursor-pointer flex border border-black align-center justify-center rounded-lg w-36 md:w-28 h-10">
                <Image
                  className="w-8 h-8 md:w-6 md:h-6 self-center"
                  src={github}
                  alt="github"
                />
              </div>
              <div className="cursor-pointer flex border border-black  align-center justify-center rounded-lg w-36 md:w-28 h-10">
                <Image
                  className="w-8 h-8 md:w-6 md:h-6 self-center"
                  src={google}
                  alt="google"
                />
              </div>
            </div>
            <input
              className="rounded-lg bg-grey w-full h-10 placeholder-text px-2 mb-1"
              placeholder="email"
            ></input>
            <input
              className="rounded-lg bg-grey w-full h-10 placeholder-text px-2 mb-4 md:mb-10"
              placeholder="password"
            ></input>
            <div className="flex flex-row mb-6 align-center ">
              <div className="bg-grey w-6 h-6 mr-2"></div>
              <p className="text-text">remember me</p>
            </div>
            <button className="w-72 h-10 bg-primary text-white text-left rounded-lg px-2 mb-4 md:mb-8">
              sign in
            </button>
            <p className="text-left md:text-right">forgot password?</p>
          </form>
        </div>
      </div>
    </main>
  );
}
