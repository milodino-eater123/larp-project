import {useContext} from 'react';
import {TaskContext} from '../../context/TaskProvider';
import { useNavigate } from "react-router-dom";
import { EditButton } from './EditButton';
export default function TaskCard(){
    const {tasks,setTasks,editTask,isEditing} = useContext(TaskContext);
    const navigate = useNavigate();
    const task_text = tasks[0] ? tasks[0].name : "No tasks yet";
    const project_id = tasks[0] ? tasks[0].project_id : null;
    const task_id = tasks[0] ? tasks[0].id : null;
    return(
        <div className="bg-[#3D485A] shadow-2xl rounded-4xl w-[90vw] aspect-square relative"
        onClick={() => {
            if (tasks[0] && !isEditing) {
            navigate(`/project/${project_id}`)}}}>

        <div className="absolute top-0 right-0 m-3">
        <EditButton/>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 flex justify-center">
        {isEditing ? 
            <input className = "outline-none text-2xl" defaultValue={task_text} 
            onChange={(e)=>{
                editTask(e.target.value,task_id);
            }}
            onClick={(e)=>e.stopPropagation()} /> 
    :
            <div className="text-2xl">{task_text}</div>
        }
        </div>

        </div>
    )
}