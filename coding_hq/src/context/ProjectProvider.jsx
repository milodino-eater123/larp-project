import { createContext, useState, useEffect } from 'react';
export const ProjectContext = createContext();
export function ProjectProvider({children}){
    const [projects,setProjects] = useState( ()=>JSON.parse(localStorage.getItem("projects")) || []);

    useEffect(()=>{
        localStorage.setItem("projects",JSON.stringify(projects));
    },[projects]);
                
    function addProject(name){
        const newProject = {name:name,content:'',id:crypto.randomUUID()};
        setProjects(prev=>[...prev,newProject]);
        return newProject.id;
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