import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProjectContext } from '../context/ProjectProvider';
import ReturnHomeButton from '../components/ReturnHomeButton';
export function ProjectPage(){
    const { id } = useParams();
    const {projects,updateProjectName,updateProjectContent} = useContext(ProjectContext);
    const project = projects.find(p=>p.id ===id);

    if (!project) {
        return (
            <div className="h-screen flex justify-center items-center">Project not found</div>
        )
    }
    return (
    <div className = "overflow-y-auto bg-black flex flex-col h-screen pt-6">
        <div className = "flex justify-between p-7">
        <ReturnHomeButton />
        <input className="w-full text-white text-3xl font-bold text-center" defaultValue={project.name} onChange={(e)=>updateProjectName(id,e.target.value)}/>
        <div></div>
        </div>
        <textarea className = "text-white placeholder:text-gray-500 outline-none w-full h-full p-5"
            value={project.content}
            onChange={(e) => updateProjectContent(id, e.target.value)}
        />
    </div>

    )
}