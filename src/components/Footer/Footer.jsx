import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import darkTheme from "../../themes/darkTheme";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <ThemeProvider theme={darkTheme}>
            <Box
                position="fixed"
                bottom={0}
                width="100%"
                bgcolor="background.paper"
                color="text.primary"
                p={2}
                boxShadow={4}
                borderTop={1}
                borderColor="divider"
                zIndex={1300}
                textAlign="center"
            >
                <Typography variant="body2">© {currentYear} ToDoTask</Typography>
            </Box>
        </ThemeProvider>
    );
};

export default Footer;


