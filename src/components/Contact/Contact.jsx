import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import contactStyles from './ContactStyles';
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
                sx={{
                    p: 3,
                    width: 400,
                    maxWidth: '100%',
                    marginRight: '400px',
                    '@media (max-width: 1030px)': {
                        marginRight: '0',
                        padding: '40px 0 0 50px'
                },


            }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="body2" align="center" gutterBottom sx={{ fontSize: '0.9rem' }}>
                    Feel free to contact us any time. We will get back to you as soon as we can!
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        required
                        sx={contactStyles.textField}

                    />
                    <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        type="email"
                        required
                        sx={contactStyles.textField}

                    />
                    <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                        sx={contactStyles.textField}

                    />
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            endIcon={<SendIcon />}
                            sx={contactStyles.button}
                        >
                            Send
                        </Button>
                    </Box>
                </form>
            </Box>
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    height: '100vh',
                    width: '200px',
                    backgroundColor: '#15b1a4',
                    padding: '20px',
                    boxSizing: 'border-box',
                    '@media (max-width: 1030px)': {
                        height: '12vh',
                        width: '100%'
                    },
                }}

            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '22%',
                        left: '-162%',
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#15b1a4',
                        zIndex: 1,

                    }}
                />
                {windowWidth >= 1030 && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -60%)',
                        width: '800px',
                        height: '400px',
                        backgroundColor: '#272727',
                        color: 'white',
                        padding: '40px',
                        '@media (max-width: 1030px)': {
                            display: 'none',
                        },
                    }}
                >
                <Typography variant="h4" align="left" gutterBottom>
                    Info
                </Typography>
                    <Typography variant="h6" align="left" gutterBottom style={{ paddingTop: '30px' }}>
                        <MailIcon /> info@todotask.we
                    </Typography>
                    <Typography variant="h6" align="left" gutterBottom style={{ paddingTop: '30px' }}>
                        <PhoneIcon /> +372 55 55 555
                    </Typography>
                    <Typography variant="h6" align="left" gutterBottom style={{ paddingTop: '30px' }}>
                        <LocationOnIcon /> Estonia,Tallinn
                    </Typography>
                </Box>
                )}

                <Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: '10%', left: '55%', transform: 'translateX(-50%)' }}>
                    <FacebookIcon sx={{ marginRight: '20px' }} />
                    <InstagramIcon sx={{ marginRight: '20px' }} />
                    <WhatsAppIcon />
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
