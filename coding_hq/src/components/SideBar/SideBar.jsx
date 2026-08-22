import { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskProvider';
import { ProjectContext} from '../../context/ProjectProvider';
import { useLongPress } from '../../hooks/useLongPress';
import ProjectList from './ProjectList'
import TaskList from './TaskList'
import { ChevronLeft,List } from "lucide-react";


export default function SideBar(){
    const tasks = useContext(TaskContext);
    const projects = useContext(ProjectContext);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    return (
        isSideBarOpen ? 
        <OpenSideBar setIsSideBarOpen={setIsSideBarOpen}/>
        :
        <button className="fixed left-2 top-2 rounded-xl outline outline-black w-10 h-10 flex items-center justify-center" onClick={() => setIsSideBarOpen(true)}><List/></button> 
    )

}

function OpenSideBar ({setIsSideBarOpen}) {
    const [mode,setMode] = useState("projects")
    return(
        <div className="fixed h-full bg-black z-90 self-start">
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

