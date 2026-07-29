import NextTask from "../components/NextTask";
import TaskButtons from "../components/TaskButtons";
import TaskList from "../components/TaskList";
import { EditButton } from "../components/EditButton";
import AddTaskPopup from "../components/AddTaskPopup";
import { useContext } from "react";
import { TaskContext } from "../context/TaskProvider";

export function Home(){
    const {addingTask} = useContext(TaskContext);
    return(
        <>
        <NextTask />
        <EditButton />
        <TaskButtons />
        <TaskList />
        {addingTask && <AddTaskPopup />}
        </>
    )
}