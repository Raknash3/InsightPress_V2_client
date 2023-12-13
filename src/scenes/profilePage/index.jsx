import { Box, useMediaQuery, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import UserWidget from "scenes/widgets/UserWidget";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";


const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [location, setLocation] = useState('');
    const { userId } = useParams();
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

    const getUser = async () => {
        const response = await fetch(`http://localhost:6001/users/${userId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setUser(data);
        console.log(user)
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setOccupation(data.occupation);
        setLocation(data.location);
    };


    const updateUser = async () => {
        const response = await fetch(`http://localhost:6001/users/${userId}`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                occupation,
                location
            })
        });
        const data = await response.json();
        setUser(data);
        //console.log(user)
    };

    useEffect(() => {
        console.log('render');
        getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        console.log(user);
    }, [user]);

    if (!user) return null;

    return (
        <Box>
            <Navbar />
            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="2rem"
                justifyContent="center"
            >
                <Box flexBasis={isNonMobileScreens ? "40%" : undefined}>
                    {/*<UserWidget userId={userId} picturePath={user.picturePath} /> 
                    <Box m="2rem 0" />*/}

                    <Box component={WidgetWrapper}>
                        <Box component={FlexBetween} gap="0.5rem" pb="1.1rem">
                            <Box component={FlexBetween} gap="1rem">
                                <UserImage image={user.picturePath} />
                                <Box>
                                    <TextField
                                        label="First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        variant="outlined"
                                        margin="normal"
                                        style={{ marginRight: '10px' }}
                                    />
                                    <TextField
                                        label="Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        variant="outlined"
                                        margin="normal"

                                    />
                                    <TextField
                                        label="Occupation"
                                        value={occupation}
                                        onChange={(e) => setOccupation(e.target.value)}
                                        variant="outlined"
                                        margin="normal"
                                        style={{ marginRight: '10px' }}
                                    />
                                    <TextField
                                        label="Location"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        variant="outlined"
                                        margin="normal"

                                    />

                                    {/* <Button
                                        variant="contained"
                                        component="label"
                                        margin="normal"
                                        style={{ marginRight: '20px', marginLeft: '10px' }}

                                    >
                                        Upload Profile Photo
                                        <input
                                            type="file"
                                            hidden
                                        />
                                    </Button> */}

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={updateUser}

                                    >
                                        Update Profile
                                    </Button>

                                </Box>
                            </Box>
                        </Box>


                    </Box>


                    <Box m="2rem 0" />
                    <FriendListWidget userId={userId} />

                </Box>


                <Box
                    flexBasis={isNonMobileScreens ? "60%" : undefined}
                    mt={isNonMobileScreens ? undefined : "2rem"}
                >
                    <MyPostWidget picturePath={user.picturePath} />
                    <Box m="2rem 0" />
                    <PostsWidget userId={userId} isProfile />
                </Box>


            </Box>
        </Box>
    );
};

export default ProfilePage;