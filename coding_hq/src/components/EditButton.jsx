import {TaskContext} from "../context/TaskProvider";
import {useContext} from "react";
export function EditButton(){
    const {tasks,isEditing,setIsEditing} = useContext(TaskContext)
    return(
        isEditing ? <button className="btn btn-edit-done" onClick = {()=> setIsEditing(false)}>
            Done
        </button>
        :
        <button className="btn btn-edit" onClick = {()=> setIsEditing(true)} disabled={!tasks[0]}>
            Edit
        </button>
    )
}
