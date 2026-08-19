import { useContext,useState } from 'react';
import { TaskContext } from '../../context/TaskProvider';
import { useLongPress } from '../../hooks/useLongPress';

export default function TaskList() {
    const {tasks} = useContext(TaskContext);
    const [openTaskId, setOpenTaskId] = useState(null);

    return (
        tasks.map((task) =>{ 
            <Task task={task} openTaskId={openTaskId} setOpenTaskId={setOpenTaskId}/>
}
)
    )
}

function Task({task,openTaskId,setOpenTaskId}){
    const {deleteTask} = useContext(TaskContext);
    const isOpen = openTaskId === task.id;
    const longPressEvent = useLongPress(() => setOpenTaskId(task.id))
    return(
    <div>
        {task.name}
        {isOpen && 
        <div {...longPressEvent}>
            <button>edit</button>
            <button>delete</button>
        </div>
}
    </div>
    )

}