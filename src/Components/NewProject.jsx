import { useRef } from "react";
import Input from "./Input";
import Modle from "./Modle";

export default function NewProject({onAdd,onCancel}){
    const title=useRef();
    const description=useRef();
    const date=useRef();
    const modal=useRef();
    function handleSave(){
        let enteredTitle=title.current.value;
        let enteredDescription=description.current.value;
        let enteredDate=date.current.value;
        const newproject={
            title:enteredTitle,
            description:enteredDescription,
            date:enteredDate
        }
        if(enteredTitle.trim==='' || enteredDescription==='' || enteredDate===''){
            modal.current.open();
            return
        }
        onAdd(newproject);
        
    }
    
    return(
        <><Modle ref={modal} buttonCapture='Close'>
        <h2 className='text-xl my-4 text-stone-900 font-bold '>Invalid input</h2>
            <p className='text-stone-600 mb-4'>Oops...looks like you have forget to enterd values.</p>
            <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
         </Modle>
        <dev className="w-[35rem] mt-16 pl-11">
            <menu className="flex justify-end items-center gap-4 my-4">
                    <li><button onClick={onCancel} className="text-stone-600 hover:text-stone-950">Cancel</button></li>
                    <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950">Add</button></li>
            </menu>
            <form>
                <Input type='text' ref={title} label="Title" />
                <Input type='text' ref={description} label="Description" textarea/>
                <Input type='date' ref={date} label="Due Date"/>
            </form>
        </dev>
        </>
    )
}