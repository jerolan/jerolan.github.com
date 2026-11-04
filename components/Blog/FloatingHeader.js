import { useEffect, useState } from "react";

export default function FloatingHeader({ title }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 280);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function scrollToTop() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  }

  if (!isVisible) return null;

  return (
    <div className="floating-header motion-reduce:transition-none">
      <div>
        <button type="button" onClick={scrollToTop}>
          {title}
        </button>
      </div>
    </div>
  );
}
