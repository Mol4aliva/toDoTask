import './App.scss';
import { Routes, Route } from "react-router-dom";
import LeftNavbar from "./components/LeftNavbar";
import Navbar from "./components/Navbar";
import MyCalendar from "./components/Calendar";
import Home from "./components/Home";
import FamilyTasks from "./pages/FamilyTasks";
import ShoppingTasks from "./pages/ShoppingTasks";
import NotFound from "./pages/NotFound";


function App() {
    return (
        <>
                <Navbar/>
                <LeftNavbar/>
                <Routes>
                    <Route path="/" element={<Home/>}>
                    <Route path="calendar" element={<MyCalendar/>}/>
                    <Route path="family" element={<FamilyTasks/>}/>
                    <Route path="shopping" element={<ShoppingTasks/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
        </>
    );
}

export default App;
