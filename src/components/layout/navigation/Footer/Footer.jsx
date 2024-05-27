import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (

            <Box
                position="fixed"
                bottom={0}
                width="100%"
                bgcolor="#15b1a4"
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
    );
};

export default Footer;


