"use client";
import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);
  const smoothTransition = "height 0.5s cubic-bezier(.4,1.5,.6,1)";

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setScroll(scrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "1.5px",
        height: "100vh",
        zIndex: 50,
        display: "flex",
        alignItems: "flex-start",
        pointerEvents: "none",
      }}
    >
      {/* Only show beam and glow when scrolling */}
      {scroll > 0 && (
        <>
          {/* Neon beam (solid green, grows with scroll) */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: `${scroll * 100}%`,
              borderRadius: "8px",
              background: "#34d399",
              boxShadow: "none",
              pointerEvents: "none",
              opacity: 0.5,
              transition: smoothTransition,
            }}
          />
          {/* Progress bar with subtle glow, grows with scroll */}
          <div
            style={{
              width: "100%",
              height: `${scroll * 100}%`,
              background: "#34d399",
              boxShadow: "0 0 8px 2px #34d39988, 0 0 16px 4px #34d39944",
              borderRadius: "8px",
              transition: smoothTransition,
            }}
          />
        </>
      )}
    </div>
  );
}
