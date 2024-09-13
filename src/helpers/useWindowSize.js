import { useState } from "react";
import { useEffect } from "react";


export default function useWindowSize() {
    // initial values of the sized must be defined in this case, so it prevents the undefined result at the initial-render
    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});

    useEffect(function() {
        function getWindowSize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener("resize", getWindowSize);

        getWindowSize()

        return () => window.removeEventListener("resize", getWindowSize);

    }, []);

    
    return {width: windowSize.width, height: windowSize.height};
}

