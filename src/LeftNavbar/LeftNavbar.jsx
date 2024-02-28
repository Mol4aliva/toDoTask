import {Nav, Container, Row, Col, Image} from 'react-bootstrap';
import {
    BiCalendarCheck,
    BiFilter,
    BiListUl,
    BiPlusCircle,
    BiPencil,
    BiTask,
    BiTrash,
    BiHelpCircle,
} from "react-icons/bi";
import {BsPersonFill} from 'react-icons/bs';
import {AiOutlineContacts} from 'react-icons/ai';
import './style.scss';
import iconProfil from './icon-profil.png';
import Body from "../Body";

function LeftNavbar() {


    return (
        <Container fluid className="container-color">
            <Row>
                <Col sm={3} className="sidenav">

                    <Nav className="flex-column p-2">
                        <Nav.Item className="my-3">
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    <Image className="icon-profil" src={iconProfil} roundedCircle/>
                                </Col>
                                <Col>
                                    <h1 className="name">Irina Vedennikova</h1>
                                </Col>
                            </Row>
                        </Nav.Item>
                    </Nav>
                    <Nav className="flex-column nav-link p-2">
                        <Nav.Item>
                            <Nav.Link className="word" href="#calendar">
                                <BiCalendarCheck className="icon"/>
                                Calendar</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="word" href="#filter">
                                <BiFilter className="icon"/>
                                Filter</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="word" href="#family">
                                <BiListUl className="icon"/>
                                Family</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="word" href="#work">
                                <BiListUl className="icon"/>
                                Work</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="word" href="#shopping">
                                <BiListUl className="icon"/>
                                Shopping</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <hr className="border-line"/>
                    <Nav className="flex-column nav-link p-2">
                        <Nav.Item>
                            <Nav.Link className="word" href="#new_list">
                                <BiPlusCircle className="icon"/>
                                New List</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="word" href="#edit_list">
                                <BiPencil className="icon"/>
                                Edit List</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="word" href="#tags">
                                <BiTask className="icon"/>
                                Tags</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="word" href="#deleted_items">
                                <BiTrash className="icon"/>
                                Deleted Items</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <hr className="border-line"/>
                    <Nav className="flex-column nav-link p-2">
                        <Nav.Item>
                            <Nav.Link className="word" href="#help">
                                <BiHelpCircle className="icon"/>
                                Help</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="word" href="#about">
                                <BsPersonFill className="icon"/>
                                About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="word" href="#contact">
                                <AiOutlineContacts className="icon"/>
                                Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                   <Body/>
                </Col>
            </Row>
        </Container>
    );
}

export default LeftNavbar;
