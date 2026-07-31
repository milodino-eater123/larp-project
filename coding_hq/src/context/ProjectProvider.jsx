import { createContext, useState } from 'react';
export const ProjectContext = createContext();
export function ProjectProvider({children}){
    const [projects,setProjects] = useState([]);

    function addProject(name){
        setProjects(prev=>[...prev,{name:name,content:'',id:crypto.randomUUID()}])
    }
    function deleteProject(projectId){
        setProjects(prev=>prev.filter(proj=>proj.id !== projectId))
    }
    function updateProjectContent(projectId,newContent){
        setProjects(prev=>prev.map(proj=> proj.id === projectId ? {...proj,content:newContent} : proj))
    }
    return (
        <ProjectContext.Provider value={{projects,addProject,updateProjectContent}}>
        {children}
        </ProjectContext.Provider>
    )
}