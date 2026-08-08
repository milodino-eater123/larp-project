import {useState,useContext} from 'react';
import {TaskContext} from '../../context/TaskProvider'; 
import AddProjectPopup from '../AddProjectPopup';
import ProjectDropdown from './ProjectDropdown';
export default function AddTaskPopup(){
    const {addTask,setAddingTask} = useContext(TaskContext);
    
    const [selectedProject,setSelectedProject] = useState();
    const [isAddingProject,setIsAddingProject] = useState(false);
    const [taskName,setTaskName] = useState('');

    return (

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
        <div className="fixed bg-white w-[70vw] h-[50vh] flex flex-col justify-between items-left">

        <button onClick={()=>setAddingTask(false)} className="absolute top-0 right-0 m-4 text-black">X</button>
        
        <span className="font-bold text-2xl">Add Task</span>
        <label>
            Task Name:
            <input value={taskName}onChange={(e)=>setTaskName(e.target.value)} />
        </label>

        <label>
            Project:
        </label>
        <div>
            <ProjectDropdown 
            openPopup={()=>setIsAddingProject(true)}
            setSelectedProject={setSelectedProject}
            selectedProject={selectedProject}
            />
        </div>

        <button disabled={!taskName || !selectedProject} 
    onClick={()=>
        {addTask(taskName,selectedProject)
         setTaskName('') 
         setAddingTask(false)
        }}>
        Add Task
    </button>
    </div>


    {isAddingProject && <AddProjectPopup closePopup={() => setIsAddingProject(false)}/>}

</div>
    )
}