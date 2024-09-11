import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export default function ThemeToggler({ className }: { className?: string }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <Switch
      checked={isDarkMode}
      onChange={setIsDarkMode}
      className={`${className} group relative flex h-7 w-14 cursor-pointer rounded-full bg-text p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-text"`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-background ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
      />
      <MoonIcon className="text-background size-5 mx-auto -mr-[0.5px]"/>
      <SunIcon className="text-background size-5 absolute "/>
    </Switch>
  );
}
