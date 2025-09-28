import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import CountdownClient from "./CountdownClient";

export function CountdownSection() {
  return (
    <>
      
      {/* <section 
        id="CountdownSection" 
        className="relative h-120 max-w-screen overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1px",
          transform: "translateZ(-10px)"
        }}
      >
        <div className="absolute inset-0 bg-red-100"></div>
        <div 
          className="absolute inset-0 z-10 grid justify-center items-center"
          style={{
            transform: "translateZ(-5px) scale(5)"
          }}
        >
          Hello
        </div>
      </section> */}
      <CountdownClient />
    </>
  )
}