"use client";

import { Description, Field, Input } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function Search() {
  return (
    <Field className="relative sm:w-2/3 mx-auto mt-24">
      <Input
        placeholder="Explore Endless Creativity..."
        className={clsx(
          "block w-full rounded-full bg-background ring-1 ring-outline py-2 px-5 text-text placeholder:text-outline font-lora",
          "focus:outline-none "
        )}
      />
      <MagnifyingGlassIcon className="size-6 text-text absolute right-4 top-2" />
    </Field>
  );
}
