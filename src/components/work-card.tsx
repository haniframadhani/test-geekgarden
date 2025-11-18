import { Badge } from "@/components/ui/badge";
import thumbnail from "../assets/1c6bbc0be719e9d93c02a87ba51308ebb0297cdf.webp";

export default function WorkCard() {
  return (
    <div className="bg-white border-b py-7">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="rounded-md w-80 h-60 overflow-hidden">
          <img className="w-full h-full object-center object-cover" src={thumbnail} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-3xl">Designing Dashboards</h3>
          <div className="flex items-center gap-2">
            <Badge className="bg-[#142850] text-lg">2020</Badge>
            <span className="text-[#8695A4]">Dashboard</span>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
}
