import React, { useState } from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const MenuTable = ({ tasks, addTask, deleteTask }) => {
    const [newTask, setNewTask] = useState('');
    const [error, setError] = useState('');

    const handleAddTask = () => {
        if (!newTask.trim()) {
            setError('Task cannot be empty');
            return;
        }
        addTask(newTask);
        setNewTask('');
        setError('');
    };

    return (
        <>
            <Box sx={{ width: '100%', px: [2, 4, 6, 8] }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField
                            fullWidth
                            label="New List"
                            variant="outlined"
                            id="fullWidth"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            error={!!error}
                            helperText={error}
                            sx={{
                                height: '50px',
                                margin: '10px',
                            }}
                        />
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleAddTask}
                            sx={{
                                marginRight: '10px',
                                color: 'blue',
                                border: '1px solid blue',
                                backgroundColor: 'white',
                                '&:hover': {
                                    color: 'blue',
                                    backgroundColor: '#eaecef',
                                },
                            }}
                        >
                            Add
                        </Button>
                    </Box>
                    <TableContainer>
                        <Table
                            sx={{ maxWidth: '100%' }}
                            aria-labelledby="tableTitle"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Task</TableCell>
                                    <TableCell align="right" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tasks.map((task, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{task}</TableCell>
                                        <TableCell align="right" sx={{ flexGrow: 1 }}>
                                            <IconButton onClick={() => deleteTask(index)}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton>
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </>
    );
};

export default MenuTable;


