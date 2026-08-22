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
    const {deleteProject} = useContext(ProjectContext);
    const isOpen = openProjectId === project.id;
    const longPressEvent = useLongPress(() => setOpenProjectId(project.id))
    return(
    <div {...longPressEvent} className="select-none touch-none" onContextMenu={(e) => e.preventDefault()}>
        <div className="bg-red-300 h-10 w-10">{project.name}</div>
        {isOpen && 
        <div 
        onClick={(e)=>
        {e.stopPropagation();
        setOpenProjectId(null);
        }} 
        className="fixed inset-0 z-100 bg-black/50">
        <div className="bg-gray-400">
            <button>edit</button>
            <button onClick={deleteProject}>delete</button>
        </div>
        </div>
}
    </div>
    )

}