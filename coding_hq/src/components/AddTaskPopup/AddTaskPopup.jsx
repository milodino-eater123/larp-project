import {useState,useContext} from 'react';
import {TaskContext} from '../../context/TaskProvider'; 
import AddProjectPopup from '../AddProjectPopup';
import ProjectDropdown from './ProjectDropdown';
export default function AddTaskPopup(){
    const {addTask,setAddingTask} = useContext(TaskContext);
    
    const [selectedProject,setSelectedProject] = useState();
    const [isAddingProject,setIsAddingProject] = useState(false);
    const [taskName,setTaskName] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function handleNewProject(id){
        setSelectedProject(id);
        setIsDropdownOpen(false);
    }
    return (

    <div className="w-full fixed z-0 inset-0 bg-black/50 flex justify-center items-center">
        <div className="fixed z-10 bg-white w-[65vw] py-4 px-5 gap-7 flex flex-col justify-between items-left">

        <button onClick={()=>setAddingTask(false)} className="absolute top-0 right-0 m-4 text-black active:scale-95 active:opacity-75 transition-all">X</button>
        
        <span className="font-bold text-xl">Add Task</span>

        <div className="gap-0.5 flex flex-col">
            <label>Task Name:</label>
            <input className="p-1 border" value={taskName}onChange={(e)=>setTaskName(e.target.value)} />        
        </div>

        <div className="gap-0.5 flex flex-col">
            <label>Project:</label>
            <ProjectDropdown 
            openPopup={()=>setIsAddingProject(true)}
            setSelectedProject={setSelectedProject}
            selectedProject={selectedProject}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
            />
        </div>

        <button className="w-full h-8.5 bg-light_blue disabled:bg-gray-200 font-bold p-1 active:scale-95 active:opacity-75 transition-all" disabled={!taskName || !selectedProject} 
    onClick={()=>
        {addTask(taskName,selectedProject)
         setTaskName('') 
         setAddingTask(false)
        }}>
        Add Task
        </button>
    </div>
    {isAddingProject && <AddProjectPopup handleNewProject={handleNewProject} closePopup={() => setIsAddingProject(false)}/>}
</div>
    )
}