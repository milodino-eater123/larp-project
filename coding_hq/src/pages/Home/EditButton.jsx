import {TaskContext} from "../../context/TaskProvider";
import {useContext} from "react";
import { Pencil, Check} from 'lucide-react';
export function EditButton(){
    const {tasks,isEditing,setIsEditing} = useContext(TaskContext)
    return(

        isEditing ? <button className="rounded-4xl bg-yellow-300" 
        onClick = {(e)=> {
            setIsEditing(false);
            e.stopPropagation();}}>
            <Check className="w-15 h-15 p-2"/>
        </button>
        :
        <button className="rounded-2xl bg-[#F5B84B] disabled:bg-[#F5B84B]/20" 
        onClick = {(e)=> {
            setIsEditing(true);
            e.stopPropagation();}} disabled={!tasks[0]}>
            <Pencil className="w-15 h-15 p-2"/>
        </button>

    )
}
