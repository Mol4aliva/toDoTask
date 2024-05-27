import React from 'react';
import Box from "@mui/material/Box";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Help = () => {
    return (
        <Box
            sx={{
                height: '80vh',
                backgroundColor: '#f1f6f6'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    overflowY: 'hidden',
                    marginLeft: { xs: '60px', md: '200px' },
                    marginRight: { xs: '40px', md: '200px' },
                    marginTop: '100px',

                }}
            >
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        width: '100%',
                        backgroundColor: 'white',
                        zIndex: 1,
                        padding: '15px 40px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        marginLeft: { xs: '100px', md: '200px' },
                        marginRight: { xs: '50px', md: '200px' },
                        marginTop: '100px'
                    }}
                >
                    <Typography variant="h1" sx={{ fontSize: '2rem', textAlign: 'center' }}>
                        Frequently Asked Questions (FAQ)
                    </Typography>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        marginTop: '6rem', // Adjust this value based on the height of the fixed header
                        width: '100%',
                        overflowY: 'auto',
                        padding: '0 2rem',
                        boxSizing: 'border-box'
                    }}
                >
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>How to add a task?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box>
                                <Typography>
                                    To add a new task, follow these steps:
                                </Typography>
                                <ol>
                                    <li>Go to the <a href="/tasks">Tasks</a> page.</li>
                                    <li>Click on the "New List" or "Add Task" button.</li>
                                    <li>Fill out the form with the task name, description, and due date.</li>
                                    <li>Click "Save" to add the task to the list.</li>
                                </ol>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>What are task categories?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box>
                                <Typography>
                                    On our site, tasks are divided into several categories for convenience:
                                </Typography>
                                <ul>
                                    <li><b>Tasks:</b> General tasks that can be done at any time.</li>
                                    <li><b>Family:</b> Tasks related to family matters.</li>
                                    <li><b>Shopping:</b> Shopping lists and other shopping-related tasks.</li>
                                    <li><b>Work:</b> Work tasks and projects.</li>
                                </ul>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>How to edit or delete tasks?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box>
                                <Typography>
                                    To edit or delete a task, follow these steps:
                                </Typography>
                                <ol>
                                    <li>Go to the <a href="/tasks">Tasks</a> page.</li>
                                    <li>Find the task you want to edit or delete.</li>
                                    <li>To edit, click the "Edit" icon next to the task and make changes.</li>
                                    <li>To delete, click the "Delete" icon.</li>
                                </ol>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>How to manage your account?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box>
                                <Typography>
                                    To manage your account, follow these steps:
                                </Typography>
                                <ol>
                                    <li>Go to the <a href="/account">Account</a> page.</li>
                                    <li>Here you can update your personal information, change your password, and view your tasks.</li>
                                </ol>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>How to contact support?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box>
                                <Typography>
                                    If you have any questions or problems, you can contact our support:
                                </Typography>
                                <ul>
                                    <li>Go to the <a href="/contact">Contact</a> page.</li>
                                    <li>Fill out the form with your name, email, and description of the issue.</li>
                                    <li>Click "Submit", and our support team will get back to you as soon as possible.</li>
                                </ul>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    );
};

export default Help;

