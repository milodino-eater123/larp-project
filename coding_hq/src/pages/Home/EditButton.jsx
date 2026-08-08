import {TaskContext} from "../../context/TaskProvider";
import {useContext} from "react";
import { Pencil } from 'lucide-react';
export function EditButton(){
    const {tasks,isEditing,setIsEditing} = useContext(TaskContext)
    return(

        isEditing ? <button className="rounded-4xl bg-yellow-300" onClick = {()=> setIsEditing(false)}>
            Done
        </button>
        :
        <button className="rounded-2xl bg-[#F5B84B]" onClick = {()=> setIsEditing(true)} disabled={!tasks[0]}>
            <Pencil className="w-11 h-11 p-2"/>
        </button>

    )
}
