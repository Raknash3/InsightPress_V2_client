import React from 'react';
import { Box, Typography, Button, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/login');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignUpClick = () => {
        navigate('/form');
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Box display="flex" flexGrow={1}>

                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                textAlign="center"
            >
                <Typography variant="h2" gutterBottom>
                    Welcome to InsightPress!
                </Typography>
                <Typography variant="h5">
                    We're glad to have you here.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '20px' }}
                    onClick={handleLoginClick}
                >
                    Get Started
                </Button>
            </Box>
        </>
    );
};

export default WelcomePage;