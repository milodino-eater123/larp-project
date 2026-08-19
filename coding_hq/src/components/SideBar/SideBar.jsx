import { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskProvider';
import { ProjectContext} from '../../context/ProjectProvider';
import { useLongPress } from '../../hooks/useLongPress';
import ProjectList from './ProjectList'
import TaskList from './TaskList'
import { ChevronLeft } from "lucide-react";


export default function SideBar(){
    const tasks = useContext(TaskContext);
    const projects = useContext(ProjectContext);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    return (
        isSideBarOpen ? 
        <OpenSideBar setIsSideBarOpen={setIsSideBarOpen}/>
        :
        <button className="bg-black w-10 h-10" onClick={() => setIsSideBarOpen(true)}></button> 
    )

}

function OpenSideBar ({setIsSideBarOpen}) {
    const [mode,setMode] = useState("projects")
    return(
        <div>
            <button onClick={()=>setIsSideBarOpen(false)}><ChevronLeft className="bg-white w-10 h-10"/></button>
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

