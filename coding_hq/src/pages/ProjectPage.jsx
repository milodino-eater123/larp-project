import { useParams } from 'react-router-dom';
import { useContext,useState} from 'react';
import { ProjectContext } from '../context/ProjectProvider';
import ReturnHomeButton from '../components/ReturnHomeButton';
import { Check } from 'lucide-react';
export function ProjectPage(){
    const { id } = useParams();
    const {projects,setProjects,updateProjectContent} = useContext(ProjectContext);
    
    const project = projects.find(p=>p.id ===id);
    return (
    <div className = "overflow-y-auto bg-black flex flex-col h-screen gap-3">
        <div className = " flex justify-between p-7">
        <ReturnHomeButton />
        <h1 className="text-white text-3xl font-bold">{project.name}</h1>
        <div></div>
        </div>
        <textarea className = "text-white placeholder:text-gray-500 outline-none w-full h-full"
            value={project.content}
            onChange={(e) => updateProjectContent(id, e.target.value)}
        />
    </div>

    )
}