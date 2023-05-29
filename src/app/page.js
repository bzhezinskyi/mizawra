import Link from "next/link";
import NarrativeCardContainer from "./components/narrative/NarrativeCardContainer";

export default function Home() {
  return (
    <div className="flex flex-col items-center my-5">
      <h2 className="text-3xl mb-5">
        <Link href="writing">Create a new Narrative</Link>
      </h2>
      <h3 className="text-lg mb-12">Choose between three Writing Modes</h3>
      <NarrativeCardContainer />
    </div>
  );
}
