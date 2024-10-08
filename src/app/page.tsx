import ContentCard from "./components/content-card/ContentCard";
import FilterButton from "./components/filter/FilterButton";
import Search from "./components/Search";

interface TempCardInterface {
  featureImageUrl: string;
  userName: string;
  userAvatarUrl: string;
  viewCount: number;
  likeCount: number;
}

const cards: TempCardInterface[] = [
  {
    featureImageUrl: "images/placeholder.jpg",
    userName: "Nate S.",
    userAvatarUrl: "images/placeholderAvatar.png",
    viewCount: 423,
    likeCount: 45,
  },
  {
    featureImageUrl: "images/placeholder.jpg",
    userName: "Johnathon",
    userAvatarUrl: "images/placeholderAvatar.png",
    viewCount: 1083,
    likeCount: 107,
  },
  {
    featureImageUrl: "images/placeholder.jpg",
    userName: "Kevin Durant",
    userAvatarUrl: "images/placeholderAvatar.png",
    viewCount: 804,
    likeCount: 234,
  },
  {
    featureImageUrl: "images/placeholder.jpg",
    userName: "John Pork",
    userAvatarUrl: "images/placeholderAvatar.png",
    viewCount: 10987,
    likeCount: 250,
  },
  {
    featureImageUrl: "images/placeholder.jpg",
    userName: "Benjamin",
    userAvatarUrl: "images/placeholderAvatar.png",
    viewCount: 784,
    likeCount: 350,
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      <div className="relative isolate px-6  lg:px-8">
        <div className="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full text-[#262626]/60 dark:text-[#D9D9D9]/60 dark:ring-[#D9D9D9]/20 dark:hover:ring-[#D9D9D9]/30 px-3 py-1 leading-6 font-lora  ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Share your design’s with the world.{"    "}
              <a href="#" className="ml-3 text-primary">
                <span aria-hidden="true" className="absolute inset-0" />
                Sign Up <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:leading-tight font-lora text-text sm:text-6xl">
              Find your next design inspiration.
            </h1>
            <p className="mt-6 text-xl leading-8 font-lora text-text">
              Explore creative ideas from designers across the globe.
            </p>
          </div>
          <Search />
        </div>
        {/* Content -- TODO: create filter buttons */}
        <div className="mt-6 lg:mx-24 md:mx-12">
          <FilterButton />
          <div className="flex flex-wrap -mx-4">
            {cards.map((card) => (
              <ContentCard
                userName={card.userName}
                userAvaterUrl={card.userAvatarUrl}
                imgUrl={card.featureImageUrl}
                viewCount={card.viewCount}
                likeCount={card.likeCount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
