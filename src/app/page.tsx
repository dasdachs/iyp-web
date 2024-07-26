import { Typography } from "@iyp/components/Typography";
import { Logo } from "@iyp/components/Logo";
import { Tag } from "@iyp/components/Tag";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around">
      <div className="flex flex-row items-center justify-around">
        <Logo />
        <Typography type="h1">Travel Slow. Travel Smart.</Typography>
      </div>
      <div className="bg-beigeDark w-full p-5">
        <Tag text="Berlin" />
      </div>
    </main>
  );
}
