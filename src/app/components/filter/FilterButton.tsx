"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

const options = [
  { id: 1, name: "Trending" },
  { id: 2, name: "Views" },
  { id: 3, name: "Likes" },
];

function FilterButton() {
  const [selected, setSelected] = useState(options[1]);

  return (
    <div className="w-full flex justify-end">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-3">
          <ListboxButton
            className={clsx(
              "text-left block w-fit font-lora appearance-none rounded border-none py-1.5 px-3 text-sm/6 pr-8 bg-background ring-1 ring-outline font-semibold text-text sm:hover:shadow-md transition-shadow duration-100"
            )}
          >
            {selected.name}
            <ChevronDownIcon
              className="group pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 size-4 fill-text"
              aria-hidden="true"
            />
          </ListboxButton>
          <ListboxOptions
            transition
            className={clsx(
              "absolute right-0 mt-2 w-fit rounded border border-outline bg-background p-1 focus:outline-none",
              "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
            )}
          >
            {options.map((option) => (
              <ListboxOption
                key={option.name}
                value={option}
                className="group flex cursor-default items-center gap-2 font-semibold rounded-lg py-1.5 px-2.5 select-none hover:bg-accent"
              >
                <CheckIcon className="invisible size-4 fill-text group-data-[selected]:visible" />
                <div className="text-sm/6 text-text">{option.name}</div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}

export default FilterButton;
