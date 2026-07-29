import { useContext } from 'react';
import { TaskContext } from '../context/TaskProvider';
export default function TaskButtons(){
    const { tasks, addTask, deleteTask, addingTask, setAddingTask } = useContext(TaskContext);
    return(
        <>
        <button className="btn btn-add" onClick={() => setAddingTask(true)}>
            Add Task
        </button>
        <button className="btn btn-delete" onClick = {() => deleteTask(0)} disabled={!tasks[0]}>
            Delete Task
        </button>
        </>
    )
}