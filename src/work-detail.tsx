import { Badge } from "@/components/ui/badge";
import img1 from "./assets/ee4c417fe09e58bc78b83e1727fd5b43287859c1.webp";
import img2 from "./assets/d986ab1f884ac19526fd2491ea0b40e9bee97049.webp"
import img3 from "./assets/b4e76714252f22ce390e5bad81de4a04a3446a45.webp"

export default function WorkDetail() {
  return (
    <>
      <h1 className="font-bold text-4xl">
        Designing Dashboards with usability in mind
      </h1>
      <div className="flex items-center gap-2 mt-5">
        <Badge className="text-lg">2020</Badge>
        <span>Dashboard, User Experience Design</span>
      </div>
      <p className="mt-7">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <img src={img1} className="w-10/12 h-auto mx-auto mt-10" />

      <div className="flex flex-col space-y-3 mt-12">
        <h2 className="text-3xl font-medium">Heading 1</h2>
        <h3 className="text-2xl font-medium">Heading 2</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <img src={img2} className="w-10/12 h-auto mx-auto" />
        <img src={img3} className="w-10/12 h-auto mx-auto" />
      </div>
    </>
  );
}
