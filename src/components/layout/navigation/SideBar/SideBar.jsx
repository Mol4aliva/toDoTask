import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Navbar from "../Navbar";
import { menuItemsIcons, otherItemsIcons, contactItemsIcons} from "../../../../assets/icons"; // Импорт иконок из файла icons.js

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const menuItems = [
    { text: 'Tasks', icon: <menuItemsIcons.InboxIcon />, path: '/tasks', color: '#FF5733' },
    { text: 'Family', icon: <menuItemsIcons.MailIcon />, path: '/family-task', color: '#33FF57' },
    { text: 'Shopping', icon: <menuItemsIcons.InfoIcon />, path: '/shopping-task', color: '#3357FF' },
    { text: 'Work', icon: <menuItemsIcons.WorkIcon />, path: '/work-task', color: '#33b2ff' },
];

const otherItems = [
    { text: 'New List', icon: <otherItemsIcons.AddIcon />, color: '#31772b' },
    { text: 'Edit List', icon: <otherItemsIcons.EditIcon />, color: '#FF5733' },
    { text: 'Deleted Items', icon: <otherItemsIcons.DeleteIcon />, color: '#C70039' },
];

const contactItems = [
    { text: 'Help', icon: <contactItemsIcons.HelpIcon />, path: '/help', color: '#900C3F' },
    { text: 'Account', icon: <contactItemsIcons.InboxIcon />, path: '/account', color: '#186706' },
    { text: 'Contact', icon: <contactItemsIcons.ContactMailIcon />, path: '/contact', color: '#FFC300' },
    { text: 'Home', icon: <contactItemsIcons.InfoIcon />, path: '/home', color: '#FF5733' },
];

export default function SideBar({ open, handleDrawerOpen, handleDrawerClose, isDrawerOpen }) {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline/>

                <AppBar position="fixed" open={open}>

                    <Navbar handleDrawerOpen={handleDrawerOpen} isDrawerOpen={isDrawerOpen}/>

                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider sx={{ backgroundColor: '#15b1a4',  }}/>
                    <List>
                        {menuItems.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton  component={Link} to={item.path}>
                                    <ListItemIcon  sx={{ color: item.color }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider sx={{ backgroundColor: '#15b1a4' }}/>
                    <List>
                        {otherItems.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton  component={Link} to={item.path}>
                                    <ListItemIcon  sx={{ color: item.color }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider sx={{ backgroundColor: '#15b1a4' }}/>
                    <List>
                        {contactItems.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton  component={Link} to={item.path}>
                                    <ListItemIcon  sx={{ color: item.color }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>

                <DrawerHeader />

            </Box>

    );
}
