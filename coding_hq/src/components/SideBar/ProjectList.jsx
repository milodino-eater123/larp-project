import { useContext,useState } from 'react';
import { ProjectContext } from '../../context/ProjectProvider';
import { useLongPress } from '../../hooks/useLongPress';

export default function ProjectList() {
    const {projects} = useContext(ProjectContext);
    const [openProjectId, setOpenProjectId] = useState(null);

    return (
        projects.map((project) =>
            <Project key={project.id} project={project} openProjectId={openProjectId} setOpenProjectId={setOpenProjectId}/>
)
    )
}

function Project({project,openProjectId,setOpenProjectId}){
    const {deleteProject,updateProjectName} = useContext(ProjectContext);
    const isOpen = openProjectId === project.id;
    const longPressEvent = useLongPress(() => setOpenProjectId(project.id));

    return(
    <div {...longPressEvent} className="relative select-none touch-none" onContextMenu={(e) => e.preventDefault()}>
        <input className="border border-[#68758A] text-[#7D899B] py-1 px-2" defaultValue={project.name}
        onChange={(e)=>updateProjectName(project.id,e.target.value)}/>

        {isOpen && 
        <>
        <div 
        onClick={(e)=>
        {e.stopPropagation();
        setOpenProjectId(null);
        }} 
        className="fixed inset-0 z-100 bg-black/20">
        </div>
        <div className="absolute z-101 bg-gray-400 flex flex-col rounded-2xl my-4 ml-1 border divide-y">
            <button className="flex justify-start px-6 py-0.5"
            onClick={(e)=>
            {e.stopPropagation();
             setOpenProjectId(null);
            }
            }>edit</button>
            <button className="flex justify-start px-6 py-0.5" 
            onClick={(e)=>
        {e.stopPropagation();
        setOpenProjectId(null);
        deleteProject(project.id)
        }}>delete</button>
        </div>
        </>
        
}
    </div>
    )

}