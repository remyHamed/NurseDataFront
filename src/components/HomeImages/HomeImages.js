import LargeHomeImages from "./LargeHomeImages/LargeHomeImages";
import React, {useEffect, useState} from "react";
import PhoneHomeImages from "./PhoneHomeImages/PhoneHomeImages";


function HomeImages() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const breakpoints = {
        phone: 640,
        tablet: 900,
        smallLaptop: 1200,
    };

    const selectComponentBasedOnWidth = () => {
        if (windowWidth <= breakpoints.phone) {
            return <PhoneHomeImages />;
        } else {
            return<LargeHomeImages></LargeHomeImages>;
        }
    };


    return selectComponentBasedOnWidth();
}


export default HomeImages;
