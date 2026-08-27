import { useContext,useState } from 'react';
import { TaskContext } from '../../context/TaskProvider';
import { useLongPress } from '../../hooks/useLongPress';

export default function TaskList() {
    const {tasks} = useContext(TaskContext);
    const [openTaskId, setOpenTaskId] = useState(null);

    return (
        tasks.map((task) =>
            <Task key={task.id} task={task} openTaskId={openTaskId} setOpenTaskId={setOpenTaskId}/>
        )
    )
}

function Task({task,openTaskId,setOpenTaskId}){
    const {deleteTask} = useContext(TaskContext);
    const isOpen = openTaskId === task.id;
    const longPressEvent = useLongPress(() => setOpenTaskId(task.id))

    return(
        <div {...longPressEvent} className="relative select-none touch-none" onContextMenu={(e) => e.preventDefault()}>
            <div className="border border-[#68758A] text-[#7D899B] py-1 px-1">
                {task.name}
            </div>

            {isOpen && 
            <>
                <div 
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpenTaskId(null);
                    }} 
                    className="fixed inset-0 z-100 bg-black/20"
                >
                </div>

                <div className="absolute z-101 bg-gray-400 flex flex-col rounded-2xl my-4 ml-1 border divide-y">
                    <button 
                        className="flex justify-start px-6 py-0.5"
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpenTaskId(null);
                        }}
                    >
                        edit
                    </button>

                    <button 
                        className="flex justify-start px-6 py-0.5" 
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpenTaskId(null);
                            deleteTask(task.id)
                        }}
                    >
                        delete
                    </button>
                </div>
            </>
            }
        </div>
    )
}