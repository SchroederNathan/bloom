import { EyeIcon, HeartIcon } from "@heroicons/react/24/outline";
import React from "react";

interface ContentCardProps {
  imgUrl: string;
  userAvaterUrl: string;
  userName: string;
  viewCount: number;
  likeCount: number;
}

const ContentCard = ({
  imgUrl,
  userAvaterUrl,
  userName,
  viewCount,
  likeCount,
}: ContentCardProps) => {
  return (
    <div className="p-1 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
      <a href="#" className="p-3  h-fit flex flex-col justify-between">
        <img src={imgUrl} alt="Card Image" className="w-full rounded-lg" />
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            <img src={userAvaterUrl} className="w-8" />
            <p className="ml-3 font-lora text-base text-text sm:text-lg">
              {userName}
            </p>
          </div>
          <div className="flex gap-2 items-center ">
            <div className="flex flex-row gap-1 items-center">
              <EyeIcon strokeWidth={2} className="text-outline w-5 h-5 " />

              <p className="font-lora text-base sm:text-lg text-outline">
                {viewCount}
              </p>
            </div>
            <div className="flex flex-row gap-1 items-center group/like">
              <HeartIcon strokeWidth={2} className="text-outline w-5 h-5 hover/like:fill-primary hover/like:text-primary" />
              <p className="font-lora text-base sm:text-lg text-outline">
                {likeCount}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContentCard;
