import React from 'react';
import CardTask from "../../../components/cards/CardTask/CardTask";
import Box from "@mui/material/Box";

const AllTask = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f1f6f6',
                height: '90vh'
            }}
        >
           <CardTask/>
        </Box>
    );
};

export default AllTask;
