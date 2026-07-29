import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskProvider';
import {Home} from './pages/Home';
import {ProjectPage} from './pages/ProjectPage';
import { ProjectProvider } from './context/ProjectProvider';

export function App(){
    return(
        <ProjectProvider>
        <TaskProvider>
            <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/project/:id" element = {<ProjectPage/>}/>
            </Routes>
            </BrowserRouter>
        </TaskProvider>
        </ProjectProvider>
    )
}