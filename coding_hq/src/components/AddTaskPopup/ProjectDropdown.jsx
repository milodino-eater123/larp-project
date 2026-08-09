import {useState,useContext} from 'react';
import {ProjectContext} from '../../context/ProjectProvider';

export default function ProjectDropdown({openPopup,selectedProject,setSelectedProject}){
    const {projects} = useContext(ProjectContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
   
    isDropdownOpen ? 
            <div className="flex flex-col">
                {projects.map(project => (
                    <button className="border p-3 w-full flex justify-start" onClick={() => 
                    {setSelectedProject(project.id) 
                     setIsDropdownOpen(false)
                    }} key={project.id}>
                    {project.name}
                    </button>
                ))}
                <button className="border p-3 w-full flex justify-start " onClick={openPopup}>
                    + Add Project
                </button>
            </div> 
            : 

            selectedProject ?
             <button className="border p-3 flex justify-start" onClick={()=> setIsDropdownOpen(true)}>
                {projects.find(p => p.id === selectedProject)?.name}
             </button> 
            :
            <button onClick={()=> setIsDropdownOpen(true)}>
                <div className="border p-3 flex justify-between">
                    <span>Select Project</span>
                    <span>v</span>
                </div>           
            </button>
        )
        }