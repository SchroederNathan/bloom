import React from "react";

interface ContentCardProps {
  // id?: string;
  imgUrl: string;
  userAvaterUrl: string;
}

const ContentCard = ({ imgUrl, userAvaterUrl }: ContentCardProps) => {
  return (
    <div className="p-1 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
      <div className="p-3  h-fit flex flex-col justify-between">
        <img src={imgUrl} alt="Card Image" className="w-full rounded-lg" />
        <div className="flex items-center mt-3">
          <img src={userAvaterUrl} className="w-8"/>
          <p className="ml-3 font-lora text-base text-text sm:text-lg">Nate S.</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
