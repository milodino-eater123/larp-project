import {useContext} from 'react';
import {TaskContext} from '../../context/TaskProvider';
import { useNavigate } from "react-router-dom";
import { EditButton } from './EditButton';
export default function TaskCard(){
    const {tasks,setTasks,editTask,isEditing} = useContext(TaskContext);
    const navigate = useNavigate();
    const task_text = tasks[0] ? tasks[0].name : "No tasks yet";
    const id = tasks[0] ? tasks[0].id : null;
    return(
        <div onClick={() => {
            if (tasks[0] && !isEditing) {
            navigate(`/project/${id}`)}}} className="bg-[#3D485A] shadow-2xl rounded-4xl w-[90vw] aspect-square relative">

        <div className="absolute top-0 right-0 m-3">
        <EditButton/>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {isEditing ? 
            <input className = "outline-none text-2xl" defaultValue={task_text} 
            onChange={(e)=>{
                editTask(e.target.value,0);
            }}
            onClick={(e)=>e.stopPropagation()} /> 
    :
            <span className="text-2xl">{task_text}</span>
        }
        </div>

        </div>
    )
}