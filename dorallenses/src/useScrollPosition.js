//gets the scroll position for changing navbar color.
//code taken from: https://designcode.io/react-hooks-handbook-usescrollposition-hook
import { useEffect, useState } from "react";


const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
      }
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    }, []);
  
    return scrollPosition;
  };
  
  export default useScrollPosition;