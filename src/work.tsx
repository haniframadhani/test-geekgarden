import { Link } from "react-router-dom";
import WorkCard from "./components/work-card";

export default function Work() {
  return (
    <>
      <h1 className="font-black text-4xl">Work</h1>
      <div className="grid grid-cols-1 gap-5 mt-6">
        <Link to="1">
          <WorkCard />
        </Link>
        <Link to="2">
          <WorkCard />
        </Link>
        <Link to="3">
          <WorkCard />
        </Link>
        <Link to="4">
          <WorkCard />
        </Link>
      </div>
    </>
  );
}
