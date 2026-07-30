import {useState,useContext} from 'react';
import {ProjectContext} from '../context/ProjectProvider';

export default function ProjectDropdown({openPopup,selectedProject,setSelectedProject}){
    const {projects} = useContext(ProjectContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
    isDropdownOpen ? <div className="dropdown">
                {projects.map(project => (
                    <button onClick={() => 
                    {setSelectedProject(project.id) 
                     setIsDropdownOpen(false)
                    }}>
                    {project.name}
                    </button>
                ))}
                <button onClick={openPopup}>
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
            )
        )
        }