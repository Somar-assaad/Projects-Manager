import noprogectImg from '../assets/no-Projects.png'
import Button from './Button'
export default function NoProjectSelected({AddnewProject}){
 return(
    <div className="mt-8 text-center w-2/3">
        <img src={noprogectImg} alt='An empty task list' className='w-16 h-16 object-contain mx-auto'/>
        <h2 className='text-xl my-4 text-stone-500 font-bold '>No project selected</h2>
        <p className='text-stone-400 mb-4'>Select a project or get started with a new one</p>
        <p className='mt-8'>
            <Button onClick={AddnewProject}
            >Create new project</Button>
        </p>
    </div>
 )
}