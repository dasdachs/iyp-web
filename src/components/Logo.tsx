import logo from "../../public/Logo.svg";
import subtitle from "../../public/Subtitle.svg";
import Image from "next/image";

export function Logo() {
  return (
    <div className="text-white">
      <Image src={logo} alt="In Your Pocket" className="mb-2" />
      <Image src={subtitle} alt="City guides" />
    </div>
  );
}
