import {useState,useContext} from 'react';
import {TaskContext} from '../context/TaskProvider';
export function AddTaskPopup(){
    const {projects,addTask,addProject} = useContext(TaskContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedProject,setSelectedProject] = useState();
    const [isAddingProject,setIsAddingProject] = useState(false);
    const [taskName,setTaskName] = useState('');
    const [projectName,setProjectName] = useState('');
    return (
    <>
    <div className="popup-addtask">
        <label>
            Task Name:
            <input value={taskName}onChange={(e)=>setTaskName(e.target.value)} />
        </label>
        <label>
            Project:
            {isDropdownOpen ? <div className="dropdown">
                {projects.map(project => (
                    <button onClick={() => 
                    {setSelectedProject(project.id) 
                     setIsDropdownOpen(false)
                    }}>
                    {project.name}
                    </button>
                ))}
                <button onClick={() => setIsAddingProject(true)}>
                    + Add Project
                </button>

            </div> : (

            selectedProject ?
             <button onClick={()=> setIsDropdownOpen(true)}>
                {projects.find(p => p.id === selectedProject)?.name}
             </button> 
            :
            <button onClick={()=> setIsDropdownOpen(true)}>
                Select Project v               
            </button>
            )}
        </label>
    </div>
    <button disabled={!taskName || !selectedProject} 
    onClick={()=>
        {addTask(taskName,selectedProject)
         setTaskName('') 
        }}>
        Add Task
    </button>
    {isAddingProject && (
        <div className="popup-addproject">
            <label>
                Project Name:
                <input 
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
            />
            <button disabled={!projectName} 
            onClick={()=> {
                addProject(projectName)
                setProjectName('')
                setIsAddingProject(false)}}>
                Add Project
            </button>
        </label>
    </div>)}
    </>
    )
}

