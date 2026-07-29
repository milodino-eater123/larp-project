import {useContext} from 'react';
import {TaskContext} from '../context/TaskProvider';
import { useNavigate } from "react-router-dom";
export default function NextTask(){
    const {tasks,setTasks,editTask,isEditing} = useContext(TaskContext);
    const navigate = useNavigate();
    const task_text = tasks[0] ? tasks[0].name : "No tasks yet";
    const id = tasks[0] ? tasks[0].id : null;
    return( 
        isEditing ? 
        <div className="taskcard-disabled">
            <input defaultValue={task_text} onChange={(e)=>editTask(e.target.value,0)} /> 
        </div>
    :
        <button className="btn taskcard" onClick={() => navigate(`/project/${id}`)} disabled={!tasks[0]}>
            {task_text}
        </button>
    
    )
}