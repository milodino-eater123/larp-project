//need projectName,setProjectName,addProject
import {ProjectContext} from '../context/ProjectProvider';
import {useState,useContext} from 'react';

export default function addProjectPopup({closePopup}){
    
    const {addProject} = useContext(ProjectContext);
    const [projectName,setProjectName] = useState('');

    return (
        <div className="popup-addproject">
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
    </div>)
    }


