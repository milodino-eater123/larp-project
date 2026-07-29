import { createContext, useState } from 'react';
export const ProjectContext = createContext();
export function ProjectProvider({children}){
    const [projects,setProjects] = useState([]);

    function addProject(name){
        setProjects(prev=>[...prev,{name:name,content:'',id:crypto.randomUUID()}])
    }
    return (
        <ProjectContext.Provider value={{projects,addProject}}>
        {children}
        </ProjectContext.Provider>
    )
}