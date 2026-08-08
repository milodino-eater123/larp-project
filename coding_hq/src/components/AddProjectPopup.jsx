//need projectName,setProjectName,addProject
import {ProjectContext} from '../context/ProjectProvider';
import {useState,useContext} from 'react';

export default function addProjectPopup({closePopup}){
    
    const {addProject} = useContext(ProjectContext);
    const [projectName,setProjectName] = useState('');

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
        <div className="fixed bg-white w-[70vw] h-[50vh] flex flex-col justify-between items-center">
        <button onClick={closePopup} className="absolute top-0 right-0 m-4 text-black">X</button>
        
            <label>
                Project Name:
                <input 
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
            />
            <button disabled={!projectName} 
            onClick={()=> {
                addProject(projectName)
                setProjectName('')
                closePopup()
                }}>
                Add Project
            </button>
        </label>
    </div>
    </div>)

    }


