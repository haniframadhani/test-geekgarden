import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-14 flex flex-col items-center gap-4">
      <div className="flex flex-row gap-5">
        <Facebook />
        <Instagram />
        <Twitter />
        <Linkedin />
      </div>
      <span className="text-sm">Copyright ©2020 All rights reserved</span>
    </footer>
  );
}
