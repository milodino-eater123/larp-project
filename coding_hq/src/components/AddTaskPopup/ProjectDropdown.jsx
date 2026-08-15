import {useState,useContext} from 'react';
import {ProjectContext} from '../../context/ProjectProvider';

export default function ProjectDropdown({setIsAddingProject,isDropdownOpen,setIsDropdownOpen,selectedProject,setSelectedProject}){
    const {projects} = useContext(ProjectContext);
    return (
            <div>
            {selectedProject ?
             <button className="h-8 w-full bg-gray-300 border p-1 flex justify-start" onClick={()=> setIsDropdownOpen(true)}>
                {projects.find(p => p.id === selectedProject)?.name}
             </button> 
            :
            <button className="h-8 w-full bg-gray-300" onClick={()=> setIsDropdownOpen(true)}>
                <div className="border p-1 flex justify-between">
                    <span>Select Project</span>
                    <span>v</span>
                </div>           
            </button>
}
            {isDropdownOpen && 
            <div className="flex flex-col max-h-32 overflow-y-auto">
                {projects.map(project => (
                    <button className="border h-8 p-1 w-full flex justify-start" onClick={() => 
                    {setSelectedProject(project.id) 
                     setIsDropdownOpen(false)
                    }} key={project.id}>
                    {project.name}
                    </button>
                ))}
                <button className="border h-8 p-1 w-full flex justify-start " onClick={() => setIsAddingProject(true)}>
                    + Add Project
                </button>
            </div> 
}
            </div>
        )
        }