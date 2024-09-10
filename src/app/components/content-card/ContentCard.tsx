import React from "react";

interface ContentCardProps {
  imgUrl: string;
  userAvaterUrl: string;
  userName: string;
  viewCount: number;
  likeCount: number;
}

const ContentCard = ({ imgUrl, userAvaterUrl, userName, viewCount, likeCount }: ContentCardProps) => {
  return (
    <div className="p-1 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
      <a href="#" className="p-3  h-fit flex flex-col justify-between">
        <img src={imgUrl} alt="Card Image" className="w-full rounded-lg" />
        <div className="flex items-center mt-3">
          <img src={userAvaterUrl} className="w-8" />
          <p className="ml-3 font-lora text-base text-text sm:text-lg">{userName}</p>
        </div>
      </a>
    </div>
  );
};

export default ContentCard;
