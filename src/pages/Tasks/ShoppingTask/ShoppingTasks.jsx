import React, { useState } from 'react';
import MenuTable from "../../../components/forms/MenuTable/MenuTable";
import Box from "@mui/material/Box";
const ShoppingTasks = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <MenuTable tasks={tasks} addTask={addTask} deleteTask={deleteTask} />
        </Box>
    );
};

export default ShoppingTasks;

