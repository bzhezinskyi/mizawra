import Link from "next/link";
import { FaCircle, FaDotCircle } from "react-icons/fa";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <FaDotCircle className="w-5 h-5 mr-1" />
      <FaCircle className="w-5 h-5 mr-5" />
      <h1 className="uppercase text-2xl leading-snug tracking-wider">
        Mizawra
      </h1>
    </Link>
  );
}
