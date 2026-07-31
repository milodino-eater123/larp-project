import { useParams } from 'react-router-dom';
import { useContext,useState} from 'react';
import { ProjectContext } from '../context/ProjectProvider';
import ReturnHomeButton from '../components/ReturnHomeButton';
export function ProjectPage(){
    const { id } = useParams();
    const {projects,setProjects,updateProjectContent} = useContext(ProjectContext);
    
    const project = projects.find(p=>p.id ===id);
    const [curContent,setCurContent] = useState(project.content);
    return (
    <div>
        <h1>{project.name}</h1>
        <input 
            value={curContent}
            onChange={(e) => setCurContent(e.target.value)}
        />
        <button onClick={()=>{updateProjectContent(id, curContent);
        }}>
            Save
        </button>
        <ReturnHomeButton />
    </div>

    )
}