import { FaCircle, FaDotCircle } from "react-icons/fa";
import { narrativeCategories } from "../../../constants/narrativeCategories";

const { ALL, FREE_JOURNAL, PROMPTED_JOURNAL, STORY } = narrativeCategories;

export default function Categories({ category, setCategory }) {
  const handleToggleCategory = (evt) => {
    switch (evt.currentTarget.name) {
      case "free":
        setCategory(category === FREE_JOURNAL ? ALL : FREE_JOURNAL);
        break;

      case "prompted":
        setCategory(category === PROMPTED_JOURNAL ? ALL : PROMPTED_JOURNAL);
        break;

      case "story":
        setCategory(category === STORY ? ALL : STORY);
        break;

      default:
        break;
    }
  };

  return (
    <ul className="w-full flex justify-between mb-44">
      <li className="w-1/3 h-44 m-3 text-center">
        <button
          className="relative w-full h-32 mt-9 p-auto rounded-3xl btn"
          name="free"
          onClick={handleToggleCategory}
        >
          {category === FREE_JOURNAL ? (
            <FaCircle className="absolute end-1/2 bottom-3/4 translate-x-2/4 w-20 h-20 bg-color-blue" />
          ) : (
            <FaDotCircle className="absolute end-1/2 bottom-3/4 translate-x-2/4 w-20 h-20 bg-color-blue" />
          )}

          <h3 className="uppercase text-2xl">Free journal</h3>
        </button>
      </li>
      <li className="w-1/3 h-44 m-3 text-center">
        <button
          className="relative w-full h-32 mt-9 p-auto rounded-3xl btn"
          name="prompted"
          onClick={handleToggleCategory}
        >
          {category === PROMPTED_JOURNAL ? (
            <FaCircle className="absolute end-1/2 bottom-3/4 translate-x-2/4 w-20 h-20 bg-color-grean" />
          ) : (
            <FaDotCircle className="absolute end-1/2 bottom-3/4 translate-x-2/4 w-20 h-20 bg-color-grean" />
          )}
          <h3 className="uppercase text-2xl">prompted journal</h3>
        </button>
      </li>
      <li className="w-1/3 h-44 m-3 text-center">
        <button
          className="relative w-full h-32 mt-9 p-auto rounded-3xl btn"
          name="story"
          onClick={handleToggleCategory}
        >
          {category === STORY ? (
            <FaCircle className="absolute end-1/2 bottom-3/4 translate-x-2/4 w-20 h-20 bg-color-pink" />
          ) : (
            <FaDotCircle className="absolute end-1/2 bottom-3/4 translate-x-2/4 w-20 h-20 bg-color-pink" />
          )}
          <h3 className="uppercase text-2xl">Story</h3>
        </button>
      </li>
    </ul>
  );
}
