import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.scss';
function MyCalendar() {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <Col>
            <h1 className="name-calendar">Calendar</h1>
            <ReactCalendar
                onChange={onChange}
                value={date}
                className="custom-calendar"
                locale="en-US"
            />
        </Col>
    );
}

export default MyCalendar;

