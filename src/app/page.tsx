import Footer from "./components/footer/Footer";
import NavBar from "./components/nav/NavBar";
import Search from "./components/Search";

export default function Home() {
  return (
    <div className="bg-background">
      <NavBar />
      <div className="fixed h-full lg:w-28 ml-1 lg:border-r-2 border-text"></div>
      <div className="fixed right-0 h-full lg:w-28 mr-1 lg:border-l-2 border-text"></div>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
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
      </div>
      <Footer/>
    </div>
  );
}
