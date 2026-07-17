export function App(){
    return(
        <TaskContext>
            <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/project:id" element = {<ProjectPage/>}/>
            </Routes>
            </BrowserRouter>
        </TaskContext>
    )
}