import TaskCard from "./TaskCard";
import TaskButtons from "./TaskButtons";
import AddTaskPopup from "../../components/AddTaskPopup/AddTaskPopup";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskProvider";


export function Home(){
    const {addingTask} = useContext(TaskContext);
    return(
        <div className="bg-blue flex flex-col justify-center items-center h-screen gap-6">
        <TaskCard />
        <TaskButtons />
        {addingTask && <AddTaskPopup />}
        </div>
    )
}