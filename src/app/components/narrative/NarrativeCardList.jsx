import narrative from "../../../narrative.json";
import NarrativeCard from "./NarrativeCard";

export default function NarrativeCardList({ category }) {
  const filterNarrative =
    category === "all"
      ? narrative
      : narrative.filter((item) => item.category === category);

  return (
    <>
      <div className="w-full flex justify-between mb-8">
        <span className="text-sm">Archive:</span>

        <span className="text-sm">{filterNarrative.length} Posts</span>
      </div>
      <ul className="flex flex-wrap">
        {filterNarrative.map((item) => (
          <NarrativeCard key={item.id} details={item} />
        ))}
      </ul>
      <div className={`bggradient ${category}`}></div>
    </>
  );
}
