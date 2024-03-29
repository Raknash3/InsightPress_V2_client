// NewsPage.jsx
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import WeatherWidget from "scenes/widgets/WeatherWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
//import NewsWidget from "scenes/widgets/NewsWidget";
import NewsSearchWidget from "scenes/widgets/NewsSearchwidget";

const NewsPage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const { _id, picturePath, location } = useSelector((state) => state.user);

    return (
        <Box>
            <Navbar />
            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="0.5rem"
                justifyContent="space-between">

                <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                    <UserWidget userId={_id} picturePath={picturePath} />
                    <Box m="2rem 0" />
                    <FriendListWidget userId={_id} />
                </Box>

                <Box
                    flexBasis={isNonMobileScreens ? "42%" : undefined}
                    mt={isNonMobileScreens ? undefined : "2rem"}>
                    <NewsSearchWidget />
                </Box>

                {isNonMobileScreens && (
                    <Box flexBasis="26%">
                        <WeatherWidget location={location} />
                        <Box m="2rem 0" />
                        <AdvertWidget />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default NewsPage;