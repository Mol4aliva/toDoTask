import React, { useState } from 'react';
import MenuTable from "../components/MenuTable";

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
        <MenuTable tasks={tasks} addTask={addTask} deleteTask={deleteTask} />
    );
};

export default ShoppingTasks;

