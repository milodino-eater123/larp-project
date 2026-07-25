import {TaskContext} from "../context/TaskContext";
import {useContext} from "react";
export function EditButton(){
    const {tasks,isEditing,setIsEditing,editTask} = useContext(TaskContext)
    return(
        isEditing ? <button className="btn btn-edit-done" onClick = {()=> setIsEditing(false)}>
        </button>
        :
        <button className="btn btn-edit" onClick = {()=> setIsEditing(true)} disabled={!tasks[0]}>
        </button>
    )
}
