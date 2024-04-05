import { styled } from '@mui/material/styles';

const useStyles = styled((theme) => ({
    menuButton: {
        marginRight: 2,
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },

}));

export default useStyles;
