import { useContext } from 'react';
import { TaskContext } from '../../context/TaskProvider';
import {Check, Plus} from 'lucide-react';
export default function TaskButtons(){
    const { tasks, addTask, deleteTask, addingTask, setAddingTask } = useContext(TaskContext);
    return(
        <div className ='flex w-[80vw] justify-around'>
        <button className="rounded-4xl bg-[#8793A3] border-2" onClick={() => setAddingTask(true)}>
            <Plus className="w-20 h-20 p-2"/>
        </button>
        <button className="rounded-4xl bg-[#63C49A] border-2" onClick = {() => deleteTask(0)} disabled={!tasks[0]}>
            <Check className="w-20 h-20 p-2"/>
        </button>
        </div>
    )
}