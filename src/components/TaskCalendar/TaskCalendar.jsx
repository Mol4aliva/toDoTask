import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const CalendarContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const WeekContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    padding: '8px 0',
});

const DayContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const Day = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const DayNumber = styled('span')({
    fontWeight: 'bold',
});

const TaskColumn = styled('div')({
    border: '1px solid #a9c3d9',
    borderRadius: '4px',
    padding: '8px',
    margin: '4px',
    width: '100%',
    height: '200px',
    overflowY: 'auto',
});

function TaskCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 60000);

        return () => clearInterval(intervalId);
    }, []);

    const getWeekDays = (date) => {
        const startOfWeek = new Date(date);
        startOfWeek.setDate(date.getDate() - date.getDay() + 1);
        const endOfWeek = new Date(date);
        endOfWeek.setDate(date.getDate() - date.getDay() + 7);
        const weekDays = [];

        for (let d = new Date(startOfWeek); d <= endOfWeek; d.setDate(d.getDate() + 1)) {
            weekDays.push(new Date(d));
        }

        return weekDays;
    };

    const formatDate = (date) => {
        const options = { month: '2-digit', day: '2-digit', weekday: 'short' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return `${formattedDate} `;
    };





    const weekDays = getWeekDays(currentDate);

    const topDays = weekDays.slice(0, 4);
    const bottomDays = weekDays.slice(4);

    return (
        <CalendarContainer>
            <h2>{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
            <WeekContainer>
                <Grid container spacing={2}>
                    {topDays.map((day, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <DayContainer>
                                <Day>
                                    <DayNumber>{formatDate(day)}</DayNumber>
                                </Day>
                                <TaskColumn>
                                    <Stack
                                        component="form"
                                        sx={{
                                            width: '100%',
                                        }}
                                        spacing={2}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            hiddenLabel
                                            id={`filled-hidden-label-small-${index}`}
                                            defaultValue="Small"
                                            variant="filled"
                                            size="small"
                                        />
                                        <TextField
                                            hiddenLabel
                                            id={`filled-hidden-label-small-${index}`}
                                            defaultValue="Small"
                                            variant="filled"
                                            size="small"
                                        />
                                        <TextField
                                            hiddenLabel
                                            id={`filled-hidden-label-small-${index}`}
                                            defaultValue="Small"
                                            variant="filled"
                                            size="small"
                                        />
                                    </Stack>
                                </TaskColumn>
                            </DayContainer>
                        </Grid>
                    ))}
                </Grid>
            </WeekContainer>
            <WeekContainer>
                <Grid container spacing={2}>
                    {bottomDays.map((day, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <DayContainer>
                                <Day>
                                    <DayNumber>{formatDate(day)}</DayNumber>
                                </Day>
                                <TaskColumn>
                                    <Stack
                                        component="form"
                                        sx={{
                                            width: '100%',
                                        }}
                                        spacing={2}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            hiddenLabel
                                            id={`filled-hidden-label-small-${index}`}
                                            defaultValue="Small"
                                            variant="filled"
                                            size="small"
                                        />
                                        <TextField
                                            hiddenLabel
                                            id={`filled-hidden-label-small-${index}`}
                                            defaultValue="Small"
                                            variant="filled"
                                            size="small"
                                        />
                                        <TextField
                                            hiddenLabel
                                            id={`filled-hidden-label-small-${index}`}
                                            defaultValue="Small"
                                            variant="filled"
                                            size="small"
                                        />
                                    </Stack>
                                </TaskColumn>
                            </DayContainer>
                        </Grid>
                    ))}
                </Grid>
            </WeekContainer>
        </CalendarContainer>
    );
}

export default TaskCalendar;

