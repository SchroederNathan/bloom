import React from "react";

// provide key and name as props
const Chip = ({ key, name }: { key: string; name: string }) => {
  return (
    <a href="#">
      <div
        key={key}
        className="rounded-full w-fit ring-1 ring-outline text-text font-lora px-3"
      >
        {name}
      </div>
    </a>
  );
};

export default Chip;
