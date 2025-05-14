import React, { useState } from 'react';
import SearchBox from './SearchBox';
import TaskAction from './TaskAction';
import TaskList from './TaskList';
import AddTaskModal from './AddTaskModal';

export default function TaskBoard() {
    const defaultTask={
        "id":crypto.randomUUID(),
        "title":"Learn react",
        "description":"Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
        "priority":"High",
        "isFavorite":false,
        "tags":["web","react","js"]
    }
    const [tasks,setTasks] = useState([defaultTask])
    const [showAddModal,setShowAddModal]=useState(false)
    const [taskToUpdate,setTaskToUpdate]=useState(null)
    function handleAddTAsk (newTask){
        
         setTasks([...tasks,newTask])
         setShowAddModal(false)
     }
     function handleEditTask (task){
        console.log('edit task')
        setShowAddModal(true)
        setTaskToUpdate(task)
     }
    return (
        <>
            <section className="mb-20" id="tasks">
                {showAddModal && <AddTaskModal taskToUpdate={taskToUpdate}   onSave={handleAddTAsk}/>}
                <div className="container">
                   {/** <!-- Search Box --> */}
                   <div className="p-2 flex justify-end">
                      <SearchBox/>
                    </div> 
                
                    <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                        {/**your task add */}
                        <TaskAction onAddClick={()=>setShowAddModal(true)}/>
                    
                        <TaskList tasks={tasks} onEdit={handleEditTask}/>
                    </div>
                </div>
            </section> 
        </>
    );
};

