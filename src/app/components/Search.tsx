"use client";

import { Field, Input } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Chip from "./chips/Chip";

// Temporary data for chips
const chips = [
  { id: 1, name: "Web Design" },
  { id: 2, name: "UI/UX Design" },
  { id: 3, name: "Graphic Design" },
  { id: 4, name: "Illustration" },
  { id: 5, name: "Animation" },
];

export default function Search() {
  return (
    <>
      <Field className="relative sm:w-2/3 mx-auto mt-24 group/search mb-5">
        <Input
          placeholder="Explore Endless Creativity..."
          className={clsx(
            "block w-full rounded-full bg-background ring-1 ring-outline py-2 px-5 text-text placeholder:text-outline font-lora",
            "focus:outline-none hover:ring-2"
          )}
        />
        <MagnifyingGlassIcon className="size-6 text-text absolute right-4 top-2 group-hover/search:-rotate-12 transition-transform" />
      </Field>
      <div className="flex flex-wrap gap-x-3 gap-y-3 justify-center">
        {chips.map((chip) => (
          <Chip key={chip.id} id={chip.id} name={chip.name} /> // pass id and name as props to chip
        ))}
      </div>
    </>
  );
}
