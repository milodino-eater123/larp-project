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
        <div className="pt-[env(safe-area-inset-top,70px)]">
        <button className="rounded-xl outline outline-black flex items-center justify-center p-1.5" onClick={() => setIsSideBarOpen(true)}><List/></button>
        </div> 
    )

}

function OpenSideBar ({setIsSideBarOpen}) {
    const [mode,setMode] = useState("projects")
    return(
        <div className="fixed left-0 top-0 bottom-0 bg-black z-90">
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

