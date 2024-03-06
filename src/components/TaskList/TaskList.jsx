import React, { useState } from 'react';
import { Form, Button, Dropdown } from 'react-bootstrap';

const TaskList = () => {
    const [category, setCategory] = useState('FAMILY'); // Изначально выбрана категория FAMILY
    const [newTask, setNewTask] = useState(''); // Состояние для новой задачи
    const [tasks, setTasks] = useState({
        FAMILY: ["Task 1", "Task 2"],
        WORK: ["Task 3", "Task 4"],
        SHOPPING: ["Task 5", "Task 6"]
    });

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    const handleNewTaskChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks(prevTasks => ({
                ...prevTasks,
                [category]: [...prevTasks[category], newTask]
            }));
            setNewTask(''); // Сбросить поле для ввода новой задачи после добавления
        }
    };

    return (
        <div className="container mt-5">
            <Form>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {category}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleCategoryChange('FAMILY')}>FAMILY</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCategoryChange('WORK')}>WORK</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCategoryChange('SHOPPING')}>SHOPPING</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Form>

            <ul className="list-group mt-3">
                {tasks[category].map((task, index) => (
                    <li key={index} className="list-group-item">{task}</li>
                ))}
            </ul>

            <div className="mt-3">
                <Form.Control type="text" placeholder="Add new task" value={newTask} onChange={handleNewTaskChange} />
                <Button variant="primary" className="mt-2" onClick={addTask}>Add Task</Button>
            </div>
        </div>
    );
};

export default TaskList;
