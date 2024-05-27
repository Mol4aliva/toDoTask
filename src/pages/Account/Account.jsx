import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Account = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleToggle = () => {
        setIsSignUp(!isSignUp);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh',
                backgroundColor: '#f1f6f6',
                fontSize: '2rem',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '2rem',
                    backgroundColor: 'white',
                    boxShadow: 3,
                    borderRadius: '8px',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                    {isSignUp ? 'Signup' : 'Login'}
                </Typography>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <TextField label="Email" variant="outlined" fullWidth />
                    <TextField
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    {isSignUp && (
                        <TextField
                            label="Confirm Password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                    {!isSignUp && (
                        <Link href="#" underline="none" sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <Typography variant="body2">Forgot password?</Typography>
                        </Link>

                    )}
                    <Button variant="contained" color="primary" size="large" fullWidth>
                        {isSignUp ? 'Signup' : 'Login'}
                    </Button>
                </Box>
                <Typography sx={{ mt: 2 }}>
                    {isSignUp ? (
                        <>
                            Already have an account?{' '}
                            <Link href="#" onClick={handleToggle}>
                                Login
                            </Link>
                        </>
                    ) : (
                        <>
                            Don't have an account?{' '}
                            <Link href="#" onClick={handleToggle}>
                                Signup
                            </Link>
                        </>
                    )}
                </Typography>
                <Divider sx={{ my: 2 }}><Typography variant="body2">Or</Typography></Divider>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FacebookIcon />}
                    fullWidth
                    sx={{ mb: 1, backgroundColor: '#1877f2' }}
                >
                    Login with Facebook
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<GoogleIcon />}
                    fullWidth
                >
                    Login with Google
                </Button>
            </Box>
        </Box>
    );
};

export default Account;
