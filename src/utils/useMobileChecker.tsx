import { useEffect, useState } from "react";

const useMobileChecker = () => {
    const [width, setWidth] = useState(window.innerWidth / window.outerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth / window.outerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    return (width <= 0.6946);
}

export default useMobileChecker