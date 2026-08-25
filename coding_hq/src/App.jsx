import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskProvider';
import { Home } from './pages/Home/Home';
import { ProjectPage } from './pages/ProjectPage';
import { ProjectProvider } from './context/ProjectProvider';

export function App(){
    return(
        <div>
        <TaskProvider>
        <ProjectProvider>
            <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/project/:id" element = {<ProjectPage/>}/>
            </Routes>
            </BrowserRouter>
        </ProjectProvider>
        </TaskProvider>
        </div>
    )
}