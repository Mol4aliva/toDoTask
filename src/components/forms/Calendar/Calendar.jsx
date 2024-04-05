import React, { useState } from 'react';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import isToday from 'date-fns/isToday';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TodayIcon from '@mui/icons-material/Today';
import Box from '@mui/material/Box';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const goToNextDay = () => {
        setCurrentDate(addDays(currentDate, 1));
    };

    const goToPreviousDay = () => {
        setCurrentDate(addDays(currentDate, -1));
    };

    const goToToday = () => {
        setCurrentDate(new Date());
    };

    // Генерация массива с датами на неделю
    const weekDates = [...Array(7)].map((_, index) => {
        const date = addDays(currentDate, index);
        const isCurrentDate = isToday(date);
        return { date, isCurrentDate };
    });

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', marginTop: '20px' }}>

                <IconButton sx={{ marginRight: '50px' }} onClick={goToPreviousDay}>
                    <ArrowBackIcon />
                </IconButton>

                {weekDates.map(({ date, isCurrentDate }, index) => (
                    <Box key={index} sx={{ textAlign: 'center', marginRight: '50px' }}>
                        <span style={{ fontWeight: 'bold', color: isCurrentDate ? 'blue' : 'black' }}>
                            {format(date, 'EEE')}
                        </span>
                        <br />
                        <span style={{ fontSize: '1.5rem', color: isCurrentDate ? 'blue' : 'black' }}>
                            {format(date, 'dd')}
                        </span>
                    </Box>
                ))}
                <IconButton onClick={goToNextDay}>
                    <ArrowForwardIcon />
                </IconButton>
                <Box sx={{ marginTop: '10px' }}>
                    <IconButton onClick={goToToday}>
                        <TodayIcon />
                    </IconButton>
                </Box>
            </Box>

        </Box>
    );
};

export default Calendar;





