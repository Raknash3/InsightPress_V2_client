import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography, Button, Card as MuiCard, CardMedia, CardContent, Avatar as MuiAvatar, Box } from '@mui/material';
import { CardActions, IconButton } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Avatar = styled(MuiAvatar)(({ theme }) => ({
    width: theme.spacing(4),
    height: theme.spacing(4),
}));

const Card = styled(MuiCard)(({ theme }) => ({
    margin: 'auto', // Center align
    width: '30%', // Card size
    marginBottom: theme.spacing(4), // Increase margin between cards
}));

const Media = styled(CardMedia)({
    height: 0,
    paddingTop: '75%', // Increase card height
});

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/login');
    };

    const handleLikeClick = () => {
        navigate('/login');
    };

    const cardData = [
        {
            description: "Batman",
            image: 'http://localhost:6001/assets/info1.jpeg',
            caption: "I just broke a girls neck for jay walking."
        },
        {
            description: "Superman",
            image: 'http://localhost:6001/assets/post4.jpeg',
            caption: "Why did batman break lois neck."
        },
        {
            description: "Ironman",
            image: 'http://localhost:6001/assets/post5.jpeg',
            caption: "Iron Man is a superhero appearing in American comic books published by Marvel Comics."
        }
    ];

    return (
        <div>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h3" sx={{ flexGrow: 1 }}>
                        Welcome to Insight press
                    </Typography>
                    <Button color="inherit" onClick={handleSignInClick}>
                        Sign in
                    </Button>
                </Toolbar>
            </AppBar>
            {cardData.map((item, index) => (
                <Card key={index} className={Card}>
                    <Box display="flex" alignItems="center" p={1}>
                        <Avatar alt={item.description} src={item.image} />
                        <Typography variant="subtitle1" ml={2}>
                            {item.description}
                        </Typography>
                    </Box>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        alt={item.description}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {item.caption}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
                            <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton aria-label="comment" onClick={handleLikeClick}>
                            <ChatBubbleOutlineIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
            <AppBar position="static">
                <Toolbar>
                    <Box display="flex" justifyContent="center">
                        <Typography variant="h6">
                            For more info, login
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default WelcomePage;