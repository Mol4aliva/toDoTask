import { useState } from "react";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/material";
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

export default function CardTask() {
    const [expanded, setExpanded] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTaskList([...taskList, { task: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleNewTaskChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleTaskCompletion = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList[index].completed = !updatedTaskList[index].completed;
        setTaskList(updatedTaskList);
    };

    const handleDeleteTask = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index, 1);
        setTaskList(updatedTaskList);
    };


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ marginTop: '20px',  maxHeight: '650px', overflowY: 'auto' }}>
                <StyledCard sx={{ maxWidth: 345, minWidth: 345 }}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Work"
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
                                value={newTask}
                                onChange={handleNewTaskChange}
                            />
                        </Box>

                        <FormControl sx={{ marginTop: '30px' }}>
                            {taskList.map((task, index) => (
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
                            Completed ({taskList.length - taskList.filter(task => task.completed).length})
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
            </Box>
        </Box>
    );
}









