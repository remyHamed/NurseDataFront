import React, {useEffect, useState} from "react";
import background from './../../assets/background.webp';
import nurse from './../../assets/n2.jpg';
import './Home-row.css';
import PhoneHeaderBar from "../HeaderBar/PhoneHeaderBar/PhoneHeaderBar";
import TabletHeaderBar from "../HeaderBar/TabletHeaderBar/TabletHeaderBar";
import SmallLapTopHeaderBar from "../HeaderBar/SmallLapTopHeaderBar/SmallLapTopHeaderBar";
import LargeViewHeaderBar from "../HeaderBar/LargeViewHeaderBar/LargeViewHeaderBar";
import PhoneHomeRowComponent from "./PhoneHomeRowComponent/PhoneHeaderBar";
import TabletHomeRowComponent from "./TabletHomeRowComponent/TabletHeaderBar";
import SmallLapTopHomeRowComponent from "./SmallLapTopHomeRowComponent/SmallLapTopHeaderBar";
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
        if (windowWidth < breakpoints.phone) {
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
