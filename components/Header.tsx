import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo2.png";

export default function Header({ link }: { link: "about" | "home" }) {
  return (
    <div className="flex justify-items-stretch border-b px-2 pt-3 pb-2">
      <div className="flex-auto justify-self-start">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className="justify-self-end mr-5 font-mono self-center hover:underline">
        {link === "about" ? <Link href={"/about"}>About</Link> : <Link href={"/"}>Home</Link>}
      </div>
    </div>
  );
}
