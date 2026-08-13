import { createContext, useState } from 'react';
export const TaskContext = createContext();
export function TaskProvider({children}){
    const [tasks,setTasks]=useState([]);
    const [isEditing,setIsEditing] = useState(false);
    const [addingTask,setAddingTask] = useState(false);
    function addTask(task_name,project_id){
        setTasks(prev=>[...prev,{name:task_name,id:project_id,content:''}])
    }
    function deleteTask(index){
        setTasks(prev=>prev.filter((_,i)=>i !== index))
    }
    function editTask(new_name,index){
        setTasks(prev=>{
            const copy = [...prev];
            copy[index] = {name:new_name,id:copy[index].id};
            return copy;
        })
    }
    return (
        <TaskContext.Provider value={{tasks,addTask,deleteTask,editTask,isEditing,setIsEditing,addingTask,setAddingTask}}>
        {children}
        </TaskContext.Provider>
    )
}