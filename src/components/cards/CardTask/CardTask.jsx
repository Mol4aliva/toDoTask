import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const StyledCard = styled(Card)(({ theme }) => ({
    border: `1px solid #e1e0e0`,
    borderLeft: `5px solid ${theme.palette.primary.main}`,
}));

const TaskLabel = styled(Typography)(({ theme, completed }) => ({
    textDecoration: completed ? 'line-through' : 'none',
    color: completed ? 'gray' : 'inherit',
    pointerEvents: completed ? 'none' : 'auto',
}));

const CardTask = ({ title, tasks, addTask, handleAddTask, handleNewTaskChange, handleTaskCompletion, handleDeleteTask }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <StyledCard sx={{ maxWidth: 345, minWidth: 345, m: 2 }}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
            />

            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '-10px'}}>
                    <IconButton
                        sx={{ color: '#0093ff' }}
                        aria-label="add task"
                        onClick={handleAddTask}
                    >
                        <AddIcon />
                    </IconButton>
                    <TextField
                        id="standard-basic"
                        label="New Task"
                        variant="standard"
                        value={addTask}
                        onChange={handleNewTaskChange}
                    />
                </Box>

                <FormControl sx={{ marginTop: '30px' }}>
                    {tasks.map((task, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                            <FormControlLabel
                                value={task.task}
                                control={
                                    <Radio
                                        checked={task.completed}
                                        onClick={() => handleTaskCompletion(index)}
                                    />
                                }
                                label={
                                    <TaskLabel completed={task.completed}>
                                        {task.task}
                                    </TaskLabel>
                                }
                            />
                            {task.completed && (
                                <IconButton aria-label="delete task" onClick={() => handleDeleteTask(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            )}
                        </Box>
                    ))}
                </FormControl>

            </CardContent>

            <CardActions disableSpacing>
                <Typography  variant="body2" sx={{ marginLeft: '10px'}}>
                    Completed ({tasks.length - tasks.filter(task => task.completed).length})
                </Typography>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
        </StyledCard>
    );
}

export default function TaskBoard() {
    const [boards, setBoards] = useState([
        { title: "Work", tasks: [], newTask: '' },
        { title: "Tasks", tasks: [], newTask: '' },
        { title: "Shopping", tasks: [], newTask: '' },
        { title: "Family", tasks: [], newTask: '' }
    ]);

    const handleAddTask = (boardIndex) => {
        if (boards[boardIndex].newTask.trim() !== '') {
            const updatedBoards = [...boards];
            updatedBoards[boardIndex].tasks.push({ task: boards[boardIndex].newTask, completed: false });
            updatedBoards[boardIndex].newTask = '';
            setBoards(updatedBoards);
        }
    };

    const handleNewTaskChange = (event, boardIndex) => {
        const updatedBoards = [...boards];
        updatedBoards[boardIndex].newTask = event.target.value;
        setBoards(updatedBoards);
    };

    const handleTaskCompletion = (boardIndex, taskIndex) => {
        const updatedBoards = [...boards];
        updatedBoards[boardIndex].tasks[taskIndex].completed = !updatedBoards[boardIndex].tasks[taskIndex].completed;
        setBoards(updatedBoards);
    };

    const handleDeleteTask = (boardIndex, taskIndex) => {
        const updatedBoards = [...boards];
        updatedBoards[boardIndex].tasks.splice(taskIndex, 1);
        setBoards(updatedBoards);
    };

    return (
        <Box sx={{
            flexGrow: 1,
            p: 2,
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '100px',
            transition: 'margin-left 0.3s ease-in-out',

        }}>
            <Grid container spacing={2}>
                {boards.map((board, index) => (
                    <Grid item key={index}>
                        <CardTask
                            title={board.title}
                            tasks={board.tasks}
                            addTask={board.newTask}
                            handleAddTask={() => handleAddTask(index)}
                            handleNewTaskChange={(event) => handleNewTaskChange(event, index)}
                            handleTaskCompletion={(taskIndex) => handleTaskCompletion(index, taskIndex)}
                            handleDeleteTask={(taskIndex) => handleDeleteTask(index, taskIndex)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
