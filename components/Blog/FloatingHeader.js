import { useEffect, useRef } from "react";
import DarkModeToggle from "../DarkModeToggle";

const threshold = 3;

export default function FloatingHeader({ title }) {
  const floatingHeaderRef = useRef(null);

  useEffect(() => {
    setFloatingHeaderTop();
    window.onscroll = setFloatingHeaderTop;
  }, []);

  function setFloatingHeaderTop() {
    // use Page.Header as reference
    const topLimit = document.querySelector("header").offsetHeight * threshold;

    if (window.pageYOffset > topLimit) {
      floatingHeaderRef.current.style.top = 0;
    } else {
      floatingHeaderRef.current.style.top = `${-floatingHeaderRef.current
        .offsetHeight}px`;
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div
      ref={floatingHeaderRef}
      style={{ transitionProperty: "top" }}
      className="fixed duration-300 left-0 right-0 z-50 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-filter backdrop-blur"
    >
      <div className="px-6 sm:px-8 py-6 sm:py-8 max-w-screen-md mx-auto flex justify-between items-center">
        <button onClick={scrollToTop}>
          <span className="font-bold text-md md:text-xl">{title}</span>
        </button>
        {/* <DarkModeToggle /> */}
      </div>
    </div>
  );
}
