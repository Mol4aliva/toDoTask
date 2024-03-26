import './App.scss';
import { Routes, Route } from "react-router-dom";
import LeftNavbar from "./components/LeftNavbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import TaskList from "./components/TaskList";
import Home from "./components/Home";
import ShoppingTasks from "./pages/ShoppingTasks";

function App() {
    return (
        <>
                <Navbar/>
                <LeftNavbar/>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/task-list" element={<TaskList />} />

                    <Route path="/shopping-tasks" element={<ShoppingTasks />} />
                </Routes>
                <Footer/>
        </>
    );
}

export default App;
