import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import WeatherWidget from "scenes/widgets/WeatherWidget";
import NewsWidget from "scenes/widgets/NewsWidget";
import AdminWidget from "scenes/widgets/adminWidget";
import { userRoles } from '../../userRoles';


const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const { _id, picturePath, location, occupation } = useSelector((state) => state.user);

    let role;
    if (occupation.toLowerCase() === 'student') {
        role = 'student';
    } else if (userRoles[_id]) {
        role = 'admin';
    } else {
        role = 'other';
    }

    return (
        <Box>
            <Navbar />
            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="0.5rem"
                justifyContent="space-between">
                {role === 'admin' ? (
                    <>
                        <UserWidget userId={_id} picturePath={picturePath} />
                        <AdminWidget />
                    </>

                ) : (
                    <>
                        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                            <UserWidget userId={_id} picturePath={picturePath} />
                            <Box m="2rem 0" />
                            <FriendListWidget userId={_id} />
                        </Box>

                        <Box
                            flexBasis={isNonMobileScreens ? "42%" : undefined}
                            mt={isNonMobileScreens ? undefined : "2rem"}>
                            <MyPostWidget picturePath={picturePath} />
                            <PostsWidget userId={_id} />
                        </Box>

                        {isNonMobileScreens && (
                            <Box flexBasis="26%">
                                <WeatherWidget location={location} />
                                <Box m="2rem 0" />
                                {role !== 'student' && <AdvertWidget />}
                                <Box m="2rem 0" />
                                <NewsWidget location={location} />
                            </Box>
                        )}
                    </>
                )}
            </Box>
        </Box>
    );
};

export default HomePage;