import Image from "next/image";
import "./ui/bento.css";
import BentoBox from "./components/BentoBox.js";


export default function Home() {
  return (
    <>
      <div className="section-2">
        <BentoBox />
      </div>
    </>

  );
}
