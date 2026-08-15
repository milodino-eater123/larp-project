//need projectName,setProjectName,addProject
import {ProjectContext} from '../context/ProjectProvider';
import {useState,useContext} from 'react';

export default function AddProjectPopup({closePopup}){
    
    const {addProject} = useContext(ProjectContext);
    const [projectName,setProjectName] = useState('');

    return (
        <div className="w-full fixed z-20 inset-0 bg-black/90 flex justify-center items-center">
        <div className="w-[65vw] fixed z-30 bg-white py-4 px-5 gap-10 flex flex-col justify-between ">
        <button onClick={closePopup} className="absolute top-0 right-0 m-4 text-black active:scale-95 active:opacity-75 transition-all">X</button>

            <span className="font-bold text-2xl">Add Project</span>

            <div className="gap-1 flex flex-col">
                <label>Project Name:</label>
                <input className="p-2 border"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                />
            </div>

            <button className="bg-light_blue disabled:bg-gray-200 font-bold p-3 active:scale-95 active:opacity-75 transition-all" disabled={!projectName} 
            onClick={()=> {
                addProject(projectName)
                setProjectName('')
                closePopup()
                }}>
                Add Project
            </button>
        
    </div>
    </div>)

    }


