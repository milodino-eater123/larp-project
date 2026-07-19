export const TaskContext = createContext();
export function TaskProvider({children}){
    const [tasks,setTasks]=useState([]);
    function addTask(task_name){
        setTasks(prev=>[...prev,{name:task_name,id:crypto.randomUUID()}])
    }
    function deleteTask(index){
        setTasks(prev=>prev.filter((_,i)=>i !== index))
    }
    function editTask(new_name,index){
        setTasks(prev=>{
            const copy = [...prev];
            copy[index] = {name:new_name,id:copy[index].id};
            return copy;
        })
    }
    return (
        <TaskContext.Provider value={{tasks,addTask,deleteTask,editTask}}>
        {children}
        </TaskContext.Provider>
    )
}