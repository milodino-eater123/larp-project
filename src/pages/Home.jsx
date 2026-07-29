import { TaskContext,TaskProvider } from "../context/TaskProvider";
import {NextTask} from "../components/NextTask"
import {TaskButtons} from "../components/NextTask"
import {TaskList} from "../components/NextTask"
import { EditButton } from "../components/EditButton";

export function Home(){
    return(
        <>
        <NextTask />
        <EditButton />
        <TaskButtons />
        </>
    )
}