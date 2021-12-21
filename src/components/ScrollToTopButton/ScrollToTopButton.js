import React, { useEffect, useState } from "react";
import './ScrollToTopButton.css'
import arrowUp from '../../icons/arrow-up.svg'

const ScrollToTop = (props) => {
  //set the state for when the button starts to appear

  const [showButton, setShowButton] = useState(false);

  //useEffect to trigger the method
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  //scrolling to the top function
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollUp} className="to-Top">
          <img src={arrowUp} alt="arrow-up" className="arrow-up"/>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
