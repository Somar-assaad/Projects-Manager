import { useState } from "react"
export default function AddTask({addTask1}){
    const [enteredTask,setEnteredTask]=useState('');
    function handleChange(event){
        setEnteredTask(event.target.value)
    }   
    function handleClick(){
        if(enteredTask.trim()===''){
            return;
        }
        setEnteredTask('')
        addTask1(enteredTask);
    }
    return(
        <div className="flex gap-4 items-center">
            <input onChange={handleChange} value={enteredTask} type="text" className="w-64 bg-slate-200 text-stone-950 rounded-sm px-2 py-1"/>
            <button onClick={handleClick} className="text-stone-700 hover:bg-stone-950">Add Task</button>
        </div>
    )
}