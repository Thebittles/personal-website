import { socialLinks, projects } from "../lib/data";
import Overlay from "./Overlay";


const BentoBox = () => {
  return (
    <>
      <div className="container bento-section">
        <div className="item item-1 personal-photo">
          <Overlay content={"Brittany Sifford"}/>
        </div>
        <div className="item item-2 about-me">
        <Overlay content={"Learn More About Me"} />
        </div>
        <div className="item item-3 linkedIn">
        <Overlay content={"LinkedIn"} />
        </div>
        <div className="item item-4 github">
        <Overlay content={"GitHub"}  />
        </div>
        <div className="item item-5 coffee">
        <Overlay content={"Coffee"}  />
        </div>
        <div className="item item-6 tbd">
        <Overlay content={"TBD"} />
        </div>
        <div className="item item-7 family">
        <Overlay content={"My Family, Justin and Tater"} />
        </div>
        <div className="item item-8 partner">
        </div>
        <div className="item item-9 dog">
        </div>
        <div className="item item-10 resume">
        <Overlay content={"Resume"} />
        </div>
        <div className="item item-11 toggle">
        <Overlay />
        </div>
        <div className="item item-12 idk">
        <Overlay content={"IDK"} />
        </div>
        <div className="item item-13 projects"></div>
        <div className="item item-14 contact"></div>

      </div>
    </>
  )
}

export default BentoBox;