import AddTask from "./AddTask.jsx";

export default function Tasks({addTask1,deleteTask,tasks}){
    return(
       <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <AddTask addTask1={addTask1}/>
        {tasks.length==0 &&
        (<p className="text-stone-800 mb-4">This project does not have any tasks yet</p>)
        }
        {tasks.length>0 &&(<ul className="p-4 mt-8 rounnded-md bg-stone-100">
            {tasks.map((task)=>
            <li className="flex justify-between my-4" key={task.taskID}>
                <span className="font-bold">{task.text}</span>
                <button className="text-stone-700 hover:text-red-500" onClick={()=>deleteTask(task.taskID)}>Clear</button>
                </li> )}
        </ul>)}
       </section> 
    )
}