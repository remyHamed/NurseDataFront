import React, {useEffect, useState} from 'react';
import PhoneHeaderBar from "./PhoneHeaderBar/PhoneHeaderBar";
import TabletHeaderBar from "./TabletHeaderBar/TabletHeaderBar";
import SmallLapTopHeaderBar from "./SmallLapTopHeaderBar/SmallLapTopHeaderBar";
import LargeViewHeaderBar from "./LargeViewHeaderBar/LargeViewHeaderBar";

function HeaderBar() {
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
            return <PhoneHeaderBar />;
        } else if (windowWidth <= breakpoints.tablet ) {
            return <TabletHeaderBar />;
        } else if (windowWidth <= breakpoints.smallLaptop) {
            return <SmallLapTopHeaderBar />;
        } else {
            return <LargeViewHeaderBar />;
        }
    };

    console.log('window width:', windowWidth);

    return selectComponentBasedOnWidth();
}

export default HeaderBar;

