"use client";
import React from "react";

// provide id and name as props
const Chip = ({
  id,
  name,
  handleChipClick,
}: {
  id: number;
  name: string;
  handleChipClick: any;
}) => {


  return (
    <a key={id} className="cursor-pointer" onClick={() => handleChipClick(name)}>
      <div className="rounded-full w-fit ring-1 ring-outline text-text font-lora px-3 lg:hover:ring-2">
        {name}
      </div>
    </a>
  );
};

export default Chip;
