import React from 'react';
import {Container} from "react-bootstrap";
import MyCalendar from "../Calendar";

const Body = () => {
    return (
            <Container className="content-wrapper">
                <MyCalendar/>
            </Container>
    );
};

export default Body;
