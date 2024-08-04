import Image from "next/image";
import person from "../../public/assets/person.svg";

//FIXME: fix background prop

export default function Person(background: string) {
  return (
    <div
      className={`flex flex-col items-center justify-center w-10 h-10 border-black border bg-${background} rounded-3xl self-start`}
    >
      <Image className="w-6 h-6 " src={person} alt="person" />
    </div>
  );
}
