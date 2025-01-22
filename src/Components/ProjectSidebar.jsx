import Button from "./Button";

export default function ProjectSidebar ({AddnewProject,projects,onSelectedProject,selectedProjectID}){
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-400 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
               <Button onClick={AddnewProject}
               >+ New Project</Button>
            </div>
            <ul className="mt-2">
               {projects.map((project)=>{ 
                let cssClass='w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-stone-800 hover:text-stone-200';
                if(project.projectID===selectedProjectID){
                    cssClass +=' text-stone-200 bg-stone-800'
                }else{
                    cssClass +=' text-stone-400' 
                }
                return(
                <li key={project.projectID}>
                    <button onClick={()=>onSelectedProject(project.projectID)} className={cssClass}>{project.title}</button>
                </li>
               )})} 
            </ul>
        </aside>
    )
}