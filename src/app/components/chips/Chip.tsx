import React from "react";

// provide id and name as props
const Chip = ({ id, name }: { id: number; name: string }) => {
  return (
    <a key={id} href="#">
      <div
        className="rounded-full w-fit ring-1 ring-outline text-text font-lora px-3"
      >
        {name}
      </div>
    </a>
  );
};

export default Chip;
