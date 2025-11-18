import { Button } from "./components/ui/button";
import profile from "./assets/c316adc465a80990af3a0075303343f0d615c92a.png";
import BlogCard from "./components/blog-card";
import { Link } from "react-router-dom";
import WorkCard from "./components/work-card";

function App() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center gap-20 md:gap-48">
        <div>
          <h1 className="font-bold text-5xl">
            Hi, I am John, Creative Technologist
          </h1>
          <p className="text-base my-10">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <Button className="font-bold" size="lg">
            Download Resume
          </Button>
        </div>
        <div className="relative">
          <div className="absolute rounded-full size-80 md:size-100 bg-[#EDF7FA] -z-10 top-5 right-3"></div>
          <div className="rounded-full size-80 md:size-100 overflow-hidden">
            <img
              src={profile}
              className="aspect-square object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="full-bleed inverse mt-12 py-8">
        <div className="flex justify-between">
          <h2 className="text-2xl">Recent post</h2>
          <span className="text-base text-[#00A8CC] hover:underline cursor-pointer">
            <Link to="blog">View all</Link>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          <Link to="blog/1">
            <BlogCard />
          </Link>
          <Link to="blog/2">
            <BlogCard />
          </Link>
        </div>
      </div>
      <div className="mt-12 py-8">
        <h2 className="text-2xl">Featured Work</h2>
        <div className="grid grid-cols-1 gap-5 mt-8">
          <Link to="work/1">
            <WorkCard />
          </Link>
          <Link to="work/2">
            <WorkCard />
          </Link>
          <Link to="work/3">
            <WorkCard />
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
