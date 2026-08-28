import { useContext } from 'react';
import { TaskContext } from '../../context/TaskProvider';
import {Check, Plus} from 'lucide-react';
export default function TaskButtons(){
    const { tasks, deleteTask, setAddingTask } = useContext(TaskContext);
    const id = tasks[0] ? tasks[0].id:null
    return(
        <div className ='flex w-[80vw] justify-around'>
        <button className="rounded-2xl bg-[#9AA5B3] border-2 active:scale-95 active:opacity-75 transition-all" onClick={() => setAddingTask(true)}>
            <Plus className="w-12 h-12 p-1.5"/>
        </button>
        <button className="rounded-2xl bg-[#22C55E] disabled:bg-[#22C55E]/20 border-2 active:scale-95 active:opacity-75 transition-all" 
        onClick = {() =>deleteTask(id)} disabled={!tasks[0]}>
            <Check className="w-12 h-12 p-1.5"/>
        </button>
        </div>
    )
}