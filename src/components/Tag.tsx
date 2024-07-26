import Image from "next/image";
import { Typography } from "@iyp/components/Typography";
import DestinationPlaceholder from "../../public/Destination.svg";

interface DestinationTagProps {
  text: string;
  imageUrl?: string;
}

export function Tag({ imageUrl, text }: DestinationTagProps) {
  return (
    <div className="bg-white hover:bg-transparent h-20 inline-flex flex-grow flex-row items-center rounded-lg text-ellipsis pl-1 pt-1 pr-5 pb-1 border-black">
      <Image src={imageUrl ?? DestinationPlaceholder} alt={text} className="mr-3 rounded-lg h-14 w-14" />
      <Typography type="b2-medium">{text}</Typography>
    </div>
  );
}
