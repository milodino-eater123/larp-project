import { useParams } from 'react-router-dom';
import { useContext,useState} from 'react';
import { ProjectContext } from '../context/ProjectProvider';
import ReturnHomeButton from '../components/ReturnHomeButton';
import { Check } from 'lucide-react';
export function ProjectPage(){
    const { id } = useParams();
    const {projects,setProjects,updateProjectContent} = useContext(ProjectContext);
    
    const project = projects.find(p=>p.id ===id);
    const [curContent,setCurContent] = useState(project.content);
    return (
    <div className = "flex flex-col h-screen gap-3">
        <div className = "bg-light_blue flex justify-between p-4">
        <ReturnHomeButton />
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <button onClick={()=>{updateProjectContent(id, curContent);
        }}>
            <Check className="w-10 h-10"/>
        </button>
        </div>
        <textarea className = "outline-none w-full h-full"
            value={curContent}
            onChange={(e) => setCurContent(e.target.value)}
        />
    </div>

    )
}