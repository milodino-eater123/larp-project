import { createContext, useState, useEffect } from 'react';
export const TaskContext = createContext();
export function TaskProvider({children}){
    const [tasks,setTasks]=useState( ()=>JSON.parse(localStorage.getItem("tasks")) || []);
    const [isEditing,setIsEditing] = useState(false);
    const [addingTask,setAddingTask] = useState(false);
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
    },[tasks]);
    function addTask(task_name,project_id){
        setTasks(prev=>[...prev,{name:task_name,id:crypto.randomUUID(),project_id:project_id,content:''}])
    }
    function deleteTask(task_id){
        setTasks(prev=>prev.filter(task=>task.id !== task_id))
    }
    function editTask(new_name,id){
        setTasks(prev=>prev.map(task=>task.id===id?{...task,name:new_name}:task))
    }
    return (
        <TaskContext.Provider value={{tasks,setTasks,addTask,deleteTask,editTask,isEditing,setIsEditing,addingTask,setAddingTask}}>
        {children}
        </TaskContext.Provider>
    )
}