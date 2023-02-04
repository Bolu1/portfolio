import { useRef, useEffect } from "react";

const DotsBackground = ({ numDots }) => {
  const dotsContainer = useRef(null);

  useEffect(() => {
    let raf;

    const updateDots = () => {
      // Remove all existing dots
      while (dotsContainer.current.firstChild) {
        dotsContainer.current.removeChild(dotsContainer.current.firstChild);
      }

      // Create new dots
      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.width = `${Math.random() * 20 + 10}px`;
        dot.style.height = dot.style.width;
        dotsContainer.current.appendChild(dot);
      }

      // Schedule next update
      raf = window.requestAnimationFrame(updateDots);
    };

    updateDots();

    return () => {
      window.cancelAnimationFrame(raf);
    };
  }, [numDots]);

  return (
    <div className="relative" style={{ backgroundColor: "black" }}>
      <div ref={dotsContainer} className="absolute bg-white" />
    </div>
  );
};
export default DotsBackground;
