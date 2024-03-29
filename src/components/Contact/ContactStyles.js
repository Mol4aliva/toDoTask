const contactStyles = {
    textField: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#4a4d4d',
            },
            '&:hover fieldset': {
                borderColor: '#545957',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#15b1a4',
            },
        },
        '& .MuiInputLabel-root': {
            color: '#545957',
        },
        '& .Mui-focused': {
            color: '#15b1a4',
        },
    },
    button: {
        width: '100%',
        color: '#15b1a4',
        border: '1px solid #15b1a4',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
            color: '#15b1a4',
        },
    },
};

export default contactStyles;

