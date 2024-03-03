//code taken from https://www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/. Thanks!
//react-router used to have an out-of-the-box implementation but they got rid of it :(
    import * as React from 'react';
    import { useEffect } from "react";
    import { useLocation } from "react-router";
    import PropTypes from 'prop-types';
    
    const ScrollToTop = (props) => {
      const location = useLocation();
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);
    
      return <div>{props.children}</div>
    };
    
    ScrollToTop.propTypes = {
      children: PropTypes.any,
    }
    
    export default ScrollToTop;