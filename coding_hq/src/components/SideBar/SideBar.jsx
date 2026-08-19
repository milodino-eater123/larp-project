import { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskProvider';
import { ProjectContext} from '../../context/ProjectProvider';
import { useLongPress } from '../../hooks/useLongPress';
import ProjectList from './ProjectList'
import TaskList from './TaskList'

export default function SideBar(){
    const tasks = useContext(TaskContext);
    const projects = useContext(ProjectContext);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    return (
        isSideBarOpen ? 
        <OpenSideBar/>
        :
        <button className="bg-black w-10 h-10" onClick={() => setIsSideBarOpen(true)}></button> 
    )
}

function OpenSideBar () {
    const [mode,setMode] = useState("projects")
    return(
        <div>
            <div>
                <button onClick={()=>setMode("projects")}>projects</button>
                <button onClick={()=>setMode("tasks")}>tasks</button>
            </div>
        {mode==="projects" ?
        <ProjectList/>
        :
        <TaskList/>
        }
        </div>
    )
}