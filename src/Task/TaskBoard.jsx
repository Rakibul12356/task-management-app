import React, { useState } from 'react';
import SearchBox from './SearchBox';
import TaskAction from './TaskAction';
import TaskList from './TaskList';
import AddTaskModal from './AddTaskModal';

export default function TaskBoard() {
    const defaultTask = {
        "id": crypto.randomUUID(),
        "title": "Learn react",
        "description": "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
        "priority": "High",
        "isFavorite": false,
        "tags": ["web", "react", "js"]
    }
    const [tasks, setTasks] = useState([defaultTask])
    const [showAddModal, setShowAddModal] = useState(false)
    const [taskToUpdate, setTaskToUpdate] = useState(null)
    function handleAddEditTAsk(newTask, isAdd) {
        if (isAdd) {
            setTasks([...tasks, newTask])
        } else {
            setTasks(
                tasks.map((task) => {
                    if (task.id === newTask.id) {
                        return newTask
                    }
                    return newTask
                })
            )
        }
        setShowAddModal(false)
    }
    function handleEditTask(task) {
        console.log('edit task')
        setShowAddModal(true)
        setTaskToUpdate(task)
    }
    function handleCloseClick() {
        setShowAddModal(false)
        setTaskToUpdate(null)
    }
    function handleDelete(taskId) {
        const taskAfterDelete = tasks.filter(task => task.id !== taskId);
        setTasks(taskAfterDelete)
    }
    function handleDeleteAll() {
        console.log('delet')
        tasks.length = 0
        setTasks([...tasks])
    }
    function handleFav(taskId){
        const taskIndex = tasks.findIndex(task=>task.id === taskId);
        const newTasks = [...tasks];
        newTasks[taskIndex].isFavorite=!newTasks[taskIndex].isFavorite;
        setTasks(newTasks)
    }
    return (
        <>
            <section className="mb-20" id="tasks">
                {showAddModal && <AddTaskModal taskToUpdate={taskToUpdate} onSave={handleAddEditTAsk} onCloseClick={handleCloseClick} />}
                <div className="container">
                    {/** <!-- Search Box --> */}
                    <div className="p-2 flex justify-end">
                        <SearchBox />
                    </div>

                    <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                        {/**your task add */}
                        <TaskAction onDeleteAllClick={handleDeleteAll} onAddClick={() => setShowAddModal(true)} />

                        <TaskList tasks={tasks} onFav={handleFav} onEdit={handleEditTask} onDelete={handleDelete} />
                    </div>
                </div>
            </section>
        </>
    );
};

