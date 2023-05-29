"use client";

import { useState } from "react";
import NarrativeCardList from "./NarrativeCardList";
import Categories from "./Categories";

export default function NarrativeCardContainer() {
  const [category, setCategory] = useState("all");

  return (
    <>
      <Categories category={category} setCategory={setCategory} />
      <NarrativeCardList category={category} />
    </>
  );
}
