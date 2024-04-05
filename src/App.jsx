import './App.scss';
import {Routes, Route} from "react-router-dom";
import SideBar from "./components/layout/navigation/SideBar";
import Footer from "./components/layout/navigation/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AllTask from "./pages/Tasks/AllTask/AllTask";
import Home from "./pages/Home";
import ShoppingTasks from "./pages/Tasks/ShoppingTask/ShoppingTasks";
import { useState } from "react";
import FamilyTasks from "./pages/Tasks/FamilyTask/FamilyTasks";
import WorkTask from "./pages/Tasks/WorkTask/WorkTask";
import Help from "./pages/Help";

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
                <Route path="/all-task" element={<AllTask/>}/>
                <Route path="/family-task" element={<FamilyTasks/>}/>
                <Route path="/shopping-task" element={<ShoppingTasks/>}/>
                <Route path="/work-task" element={<WorkTask/>}/>
                <Route path="/help" element={<Help/>}/>
            </Routes>

            <Footer/>
        </>
    );
}

export default App;
