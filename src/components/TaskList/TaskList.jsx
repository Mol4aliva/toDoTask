import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { format } from 'date-fns';
import dayjs from 'dayjs';

const TaskList = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [tasksByDayAndHour, setTasksByDayAndHour] = useState({
        Sunday: Array.from({ length: 19 }, () => []),
        Monday: Array.from({ length: 19 }, () => []),
        Tuesday: Array.from({ length: 19 }, () => []),
        Wednesday: Array.from({ length: 19 }, () => []),
        Thursday: Array.from({ length: 19 }, () => []),
        Friday: Array.from({ length: 19 }, () => []),
        Saturday: Array.from({ length: 19 }, () => [])
    });

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (day, hour, taskIndex, time) => {
        const newTasksByDayAndHour = { ...tasksByDayAndHour };
        newTasksByDayAndHour[day][hour][taskIndex].time = time;
        setTasksByDayAndHour(newTasksByDayAndHour);
    };

    const handleAddTask = (day, hour) => {
        setTasksByDayAndHour((prevTasksByDayAndHour) => {
            const newTasksByDayAndHour = { ...prevTasksByDayAndHour };
            newTasksByDayAndHour[day][hour].push({ time: null, description: '' });
            return newTasksByDayAndHour;
        });
    };

    const handleDescriptionChange = (day, hour, taskIndex, event) => {
        const newTasksByDayAndHour = { ...tasksByDayAndHour };
        newTasksByDayAndHour[day][hour][taskIndex].description = event.target.value;
        setTasksByDayAndHour(newTasksByDayAndHour);
    };

    const handleDeleteTask = (day, hour, taskIndex) => {
        setTasksByDayAndHour((prevTasksByDayAndHour) => {
            const newTasksByDayAndHour = { ...prevTasksByDayAndHour };
            newTasksByDayAndHour[day][hour].splice(taskIndex, 1);
            return newTasksByDayAndHour;
        });
    };

    // Получение временных слотов с интервалом 1 час от 8 утра до 2 ночи
    const generateTimeSlots = () => {
        const times = [];
        for (let i = 8; i <= 26; i++) {
            const hour = i % 24;
            const time = `${hour < 10 ? '0' : ''}${hour}:00`;
            times.push(time);
        }
        return times;
    };

    const timeSlots = generateTimeSlots();

    // Получение дней недели и дат с учетом выбранной даты
    const generateWeekDays = () => {
        const days = [];
        const startDate = new Date(selectedDate);
        for (let i = 0; i < 7; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            const formattedDate = format(date, 'EEEE');
            days.push(formattedDate);
        }
        return days;
    };

    const weekDays = generateWeekDays();

    return (
<>
<LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </Box>
    <Box sx={{ display: 'flex', flexDirection: 'row', ml: 20 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        {weekDays.map((day, index) => (
                            <TableCell key={index}>{day}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {timeSlots.map((time, hourIndex) => (
                        <TableRow key={time}>
                            <TableCell style={{ paddingLeft: '16px' }}>{time}</TableCell>
                            {weekDays.map((day, dayIndex) => (
                                <TableCell key={dayIndex}>
                                    {tasksByDayAndHour[day][hourIndex].map((task, taskIndex) => (
                                        <div key={taskIndex}>
                                            <TimePicker
                                                value={task.time}
                                                onChange={(time) => handleTimeChange(day, hourIndex, taskIndex, time)}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                            <TextField
                                                value={task.description}
                                                onChange={(event) => handleDescriptionChange(day, hourIndex, taskIndex, event)}
                                                placeholder="Task description"
                                            />
                                            <IconButton onClick={() => handleDeleteTask(day, hourIndex, taskIndex)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </div>
                                    ))}
                                    <IconButton onClick={() => handleAddTask(day, hourIndex)}>
                                        <AddCircleOutlineIcon />
                                    </IconButton>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
</LocalizationProvider>
</>
    );
};

export default TaskList;



