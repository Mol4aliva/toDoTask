import React from 'react';
import Box from '@mui/material/Box';
import HomeStyles from "./HomeStyles";
import backgroundImage from '../../assets/images/blue-background.jpg';
const Home = () => {
    const classes = HomeStyles();
    return (
        <Box className={classes.root}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textAlign: 'center',
                padding: '2rem',
            }}
        >
            <h1>Welcome to Our Task Planner</h1>
            <p>Organize your life and increase productivity with our intuitive task planner!</p>
            <p>With our app, you can:</p>
            <ul>
                <li>Create and manage tasks easily</li>
                <li>Set deadlines and reminders</li>
                <li>Track your progress</li>
                <li>And much more!</li>
            </ul>
            <p>Get started today and take control of your tasks!</p>
        </Box>
    );
};

export default Home;


