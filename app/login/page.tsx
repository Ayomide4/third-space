import Image from "next/image";
import person from "../../public/assets/person.svg";
import google from "../../public/assets/google.svg";
import github from "../../public/assets/github.svg";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background relative ">
      <div className="flex flex-row w-full justify-between ">
        <h1 className="text-4xl font-semibold text-primary ">Vibe Finder</h1>
        <div className="flex flex-col items-center justify-center w-10 h-10 border-black border bg-grey rounded-3xl self-start">
          <Image className="w-6 h-6" src={person} alt="person" />
        </div>
      </div>
      <div className="w-full h-96 mb-20 flex flex-row">
        <form className="flex flex-col justify-between w-72 h-full mx-36 ">
          <h2 className="text-text">register</h2>
          <input
            className="rounded-lg bg-grey w-full h-10 placeholder-text px-2"
            placeholder="username"
          ></input>
          <input
            className="rounded-lg bg-grey w-full h-10 placeholder-text px-2"
            placeholder="email"
          ></input>
          <input
            className="rounded-lg bg-grey w-full h-10 placeholder-text px-2"
            placeholder="verify email"
          ></input>
          <input
            className="rounded-lg bg-grey w-full h-10 placeholder-text px-2"
            placeholder="password"
          ></input>
          <input
            className="rounded-lg bg-grey w-full h-10 placeholder-text px-2"
            placeholder="verify password"
          ></input>
          <button className="w-72 h-10 bg-primary text-white text-left rounded-lg px-2">
            sign up
          </button>
        </form>

        <div className="flex flex-col w-72 h-full mx-36 px-2">
          <form className="flex flex-col w-full h-full">
            <h2 className="text-text mb-4">login</h2>
            <div className="flex flex-row w-full justify-between mb-10 ">
              <div className="flex border border-black align-center justify-center rounded-lg w-28 h-10">
                <Image
                  className="w-6 h-6 self-center"
                  src={github}
                  alt="github"
                />
              </div>
              <div className="flex border border-black  align-center justify-center rounded-lg w-28 h-10">
                <Image
                  className="w-6 h-6 self-center"
                  src={google}
                  alt="google"
                />
              </div>
            </div>
            <input
              className="rounded-lg bg-grey w-full h-10 placeholder-text px-2 mb-5"
              placeholder="email"
            ></input>
            <input
              className="rounded-lg bg-grey w-full h-10 placeholder-text px-2 mb-10"
              placeholder="password"
            ></input>
            <div className="flex flex-row mb-6 align-center ">
              <div className="bg-grey w-6 h-6 mr-2"></div>
              <p className="text-text">remember me</p>
            </div>
            <button className="w-72 h-10 bg-primary text-white text-left rounded-lg px-2 mb-8">
              sign in
            </button>
            <p className="text-right">forgot password?</p>
          </form>
        </div>
      </div>
    </main>
  );
}
