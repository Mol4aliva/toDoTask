import './App.scss';
import {Routes, Route} from "react-router-dom";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import TaskList from "./components/TaskList";
import Home from "./components/Home";
import ShoppingTasks from "./pages/ShoppingTasks";
import { useState } from "react";

function App() {
    const [open, setOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
        setIsDrawerOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
        setIsDrawerOpen(false);
    };
    return (
        <>
            <SideBar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} isDrawerOpen={isDrawerOpen}/>

            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/task-list" element={<TaskList/>}/>

                <Route path="/shopping-tasks" element={<ShoppingTasks/>}/>
            </Routes>

            <Footer/>
        </>
    );
}

export default App;
