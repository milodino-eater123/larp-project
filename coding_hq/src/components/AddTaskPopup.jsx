import {useState,useContext} from 'react';
import {TaskContext} from '../context/TaskProvider'; 
import AddProjectPopup from './AddProjectPopup';
import ProjectDropdown from './ProjectDropdown';
export default function AddTaskPopup(){
    const {addTask} = useContext(TaskContext);
    
    const [selectedProject,setSelectedProject] = useState();
    const [isAddingProject,setIsAddingProject] = useState(false);
    const [taskName,setTaskName] = useState('');

    return (
    <>
    <div className="popup-addtask">
        <label>
            Task Name:
            <input value={taskName}onChange={(e)=>setTaskName(e.target.value)} />
        </label>

        <label>
            Project:
            <ProjectDropdown 
            openPopup={()=>setIsAddingProject(true)}
            setSelectedProject={setSelectedProject}
            selectedProject={selectedProject}
            />
        </label>
    </div>

    <button disabled={!taskName || !selectedProject} 
    onClick={()=>
        {addTask(taskName,selectedProject)
         setTaskName('') 
        }}>
        Add Task
    </button>

    {isAddingProject && <AddProjectPopup closePopup={() => setIsAddingProject(false)}/>}

</>
    )
}