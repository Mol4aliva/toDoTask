import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
    Box, Button, Modal, TextField, Typography
} from "@mui/material";

const localizer = momentLocalizer(moment);

const eventStyleGetter = (event, start, end, isSelected) => {
    let backgroundColor = event.resource === 'green' ? '#28a745' : '#007bff';
    let style = {
        backgroundColor: backgroundColor,
        borderRadius: '0px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block'
    };
    return {
        style: style
    };
};

const FamilyTasks = () => {
    const [events, setEvents] = useState([]);
    const [open, setOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({
        title: '',
        start: new Date(),
        end: new Date(),
    });

    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the tasks!', error);
            });
    }, []);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEvent(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        axios.post('http://localhost:5000/tasks', newEvent)
            .then(response => {
                setEvents([...events, response.data]);
                handleClose();
            })
            .catch(error => {
                console.error('There was an error creating the event!', error);
            });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '1rem',
                flexDirection: 'column',
                padding: '20px',
                marginLeft: '100px'
            }}
        >
            <h1>Family Tasks</h1>

            <div style={{ position: 'relative', width: '100%' }}>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: '80vh', width: '100%' }}
                    eventPropGetter={eventStyleGetter}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpen}
                    style={{ position: 'absolute', top: '-45px', zIndex: 1 }}
                >
                    Create Event
                </Button>т
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 300,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography variant="h6" component="h2">
                        New Event
                    </Typography>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Title"
                        name="title"
                        value={newEvent.title}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Start Date"
                        type="datetime-local"
                        name="start"
                        InputLabelProps={{ shrink: true }}
                        value={newEvent.start}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="End Date"
                        type="datetime-local"
                        name="end"
                        InputLabelProps={{ shrink: true }}
                        value={newEvent.end}
                        onChange={handleChange}
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Create
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};

export default FamilyTasks;



