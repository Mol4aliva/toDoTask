import React from 'react';
import { Card, CardContent, Avatar, Typography, Grid, Button } from '@mui/material';
import { profileIcons } from "../../assets/icons";

const Profile = ({ user }) => {
    const { MailIcon, PhoneIcon, LocationOnIcon } = profileIcons;
    if (!user) {
        return <p>User information not available</p>;
    }
    return (
        <Card sx={{ maxWidth: 600, margin: 'auto', mt: 5 }}>
            <CardContent>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <Avatar
                            sx={{ width: 100, height: 100 }}
                            src={user.profilePicture || 'profilePicture'}
                            alt={user.name || 'User' }
                        />
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h4" gutterBottom>
                            {user.name || "Unknown"}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {user.bio || "No bio available."}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            <MailIcon /> {user.email || "Email not provided."}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            <PhoneIcon /> {user.phone || "Phone not provided."}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            <LocationOnIcon /> {user.location || "Location not provided."}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardContent>
                <Button variant="contained" color="primary">
                    Follow
                </Button>
            </CardContent>
        </Card>
    );
};

export default Profile;

