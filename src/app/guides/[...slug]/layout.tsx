import { Navigation } from "@iyp/components/Navigation";

export default function GuidesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-beigeLight">
      <Navigation />
      {children}
    </main>
  );
}
