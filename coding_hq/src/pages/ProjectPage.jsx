import { useParams } from 'react-router-dom';
import { useContext,useState} from 'react';
import { TaskContext } from '../context/TaskProvider';
import ReturnHomeButton from '../components/ReturnHomeButton';
export function ProjectPage(){
    const { id } = useParams();
    const {projects} = useContext(TaskContext);
    const [curContent,setCurContent] = useState(projects.find(p=>p.id ===id)?.content);
    return (
    <div>
        <h1>{projects.find(p=>p.id ===id)?.name}</h1>
        <input 
            value={curContent}
            onChange={(e) => setCurContent(e.target.value)}
        />
        <button onClick={()=>{
            projects.find(p=>p.id===id).content = curContent;
        }}>
            Save
        </button>
        <ReturnHomeButton />
    </div>

    )
}