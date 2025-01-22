import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectSidebar from "./Components/ProjectSidebar";
import ProjectDetails from "./Components/ProjectDetails";


function App() {
  const [ProjectState,setProjectState]=useState({
    projectSelectedID: undefined,
    projects:[],
    tasks:[]
  })
  function addTask(text){
    
    setProjectState(prevState=>{
      const newTask={
        taskID:Math.random(1),
        projectID:prevState.projectSelectedID,
        text:text
      }
      return{
        ...prevState,
         tasks:[newTask,...ProjectState.tasks]
      }
    })
  }
  function deleteTask(id){
    setProjectState(prevState=>{
      
      return{
       ...prevState,
       tasks:prevState.tasks.filter((task)=>task.taskID!==id)
      }
      })
  } 
  function handleAddNewProject(){
    setProjectState(prevState=>{
      
     return{
      ...prevState,
      projectSelectedID: null,
     }
     })
  }
  function handleSaveProject(projectData){
    const newProject={
      ...projectData,
      projectID:Math.random(1)
    }
    setProjectState(prevState=>{
      return{
        ...prevState,
        projectSelectedID:undefined,
        projects:[...ProjectState.projects,newProject]
      }
    })
  }
  function handleCancel(){
    setProjectState(prevState=>{
      
      return{
       ...prevState,
       projectSelectedID: undefined,
      }
      })
  }
  function handleProjectSelect(id){
    setProjectState(prevState=>{
      
      return{
       ...prevState,
       projectSelectedID: id,
      }
      })
  }
  function handleDeleteProject(){
    setProjectState(prevState=>{
      
      return{
       ...prevState,
       projectSelectedID: undefined,
       projects:prevState.projects.filter((project)=>project.projectID!==prevState.projectSelectedID)
      }
      })
  }
  const projectSelected=ProjectState.projects.find(project=> project.projectID===ProjectState.projectSelectedID)
 
  let content=<ProjectDetails project={projectSelected} onDelete={handleDeleteProject}
  addTask={addTask} deleteTask={deleteTask} tasks={ProjectState.tasks}/>
  if(ProjectState.projectSelectedID === null){
   content=<NewProject onAdd={handleSaveProject} onCancel={handleCancel}/>
  }else if(ProjectState.projectSelectedID === undefined){
    content=<NoProjectSelected AddnewProject={handleAddNewProject}/>
  }
  
  return (
    <main className="h-screen my-8 flex">
      <ProjectSidebar projects={ProjectState.projects} AddnewProject={handleAddNewProject}
       onSelectedProject={handleProjectSelect}
        selectedProjectID={ProjectState.projectSelectedID}/>
        
      {content}
    
    </main>
  );
}

export default App;
