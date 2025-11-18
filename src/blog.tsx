import { Link } from "react-router-dom";
import BlogCard from "./components/blog-card";

export default function Blog() {
  return (
    <>
      <h1 className="font-black text-4xl">Blog</h1>
      <div className="grid grid-cols-1 gap-5 mt-6">
        <Link to="1">
          <BlogCard />
        </Link>
        <Link to="2">
          <BlogCard />
        </Link>
        <Link to="3">
          <BlogCard />
        </Link>
        <Link to="4">
          <BlogCard />
        </Link>
      </div>
    </>
  );
}
