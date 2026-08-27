import TaskCard from "./TaskCard";
import TaskButtons from "./TaskButtons";
import AddTaskPopup from "../../components/AddTaskPopup/AddTaskPopup";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskProvider";
import SideBar from "../../components/SideBar/SideBar"


export function Home(){
    const {addingTask} = useContext(TaskContext);
    return(
        <div className="flex flex-col h-screen pb-[env(safe-area-inset-top)]">
            <div className="flex justify-start p-3"><SideBar/></div>
            <div className="bg-blue flex flex-col justify-center items-center grow gap-6">
                <TaskCard />
                <TaskButtons />
                {addingTask && <AddTaskPopup />}
             </div>
        </div>
    )
}