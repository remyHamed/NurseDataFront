import React, {useEffect, useState} from "react";
import './Home-row.css';
import PhoneHomeRowComponent from "./PhoneHomeRowComponent/PhoneHomeRowComponent";
import TabletHomeRowComponent from "./TabletHomeRowComponent/TabletHomeRowComponent";
import SmallLapTopHomeRowComponent from "./SmallLapTopHomeRowComponent/SmallLapTopHomeRowComponent";
import LargeViewHomeRowComponent from "./LargeViewHomeRowComponent/LargeViewHomeRowComponent";


function HomeRow() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const breakpoints = {
        phone: 600,
        tablet: 900,
        smallLaptop: 1200,
    };

    const selectComponentBasedOnWidth = () => {
        if (windowWidth <= breakpoints.phone) {
            return <PhoneHomeRowComponent />;
        } else if (windowWidth >= breakpoints.phone && windowWidth < breakpoints.tablet) {
            return <TabletHomeRowComponent />;
        } else if (windowWidth >= breakpoints.tablet && windowWidth < breakpoints.smallLaptop) {
            return <SmallLapTopHomeRowComponent />;
        } else {
            return <LargeViewHomeRowComponent />;
        }
    };

    return selectComponentBasedOnWidth();
}


export default HomeRow;
