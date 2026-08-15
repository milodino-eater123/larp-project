import {TaskContext} from "../../context/TaskProvider";
import {useContext} from "react";
import { Pencil, Check} from 'lucide-react';
export function EditButton(){
    const {tasks,isEditing,setIsEditing} = useContext(TaskContext)
    return(

        isEditing ? <button className="rounded-xl bg-yellow-300" 
        onClick = {(e)=> {
            setIsEditing(false);
            e.stopPropagation();}}>
            <Check className="w-9 h-9 p-2"/>
        </button>
        :
        <button className="rounded-xl bg-[#F5B84B] disabled:bg-[#F5B84B]/20" 
        onClick = {(e)=> {
            setIsEditing(true);
            e.stopPropagation();}} disabled={!tasks[0]}>
            <Pencil className="w-9 h-9 p-2"/>
        </button>

    )
}
