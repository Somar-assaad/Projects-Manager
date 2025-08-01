import Tasks from "./Tasks.jsx"
export default function ProjectDetails({project,onDelete,addTask,deleteTask,tasks}){
    const formateDate=new Date(project.date).toLocaleDateString('en-US',{
        year:'numeric',
        month:'short',
        day:'numeric'
    })

    return(
        <div className="w-[35rem] mt-16 mx-11">
            <header className="pg-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button onClick={onDelete} className="text-stone-600 hover:text-stone-900">Delete</button>
                </div>
                <p className="mb-4 text-stone-400 whitespace-pre-wrap">{formateDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks addTask1={addTask} deleteTask={deleteTask} tasks={tasks}/>
        </div>
    )
}