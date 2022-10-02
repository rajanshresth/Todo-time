import React, { ChangeEvent, useState } from 'react'
import { TTask } from './Type';
import TodoList from './TodoList';

function Task() {
    const [task,setTask] = useState("")
    const [todoList,settodoList]=useState<TTask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        setTask(event.target.value);
    }

    const addTask=()=>{
        const newTask = {name:task};
        if(task !== ""){
            settodoList([...todoList,newTask]);
            setTask("");
        }
    }


    const CompleteTask = (taskNameToDelete:string)=> {
        settodoList(todoList.filter((task)=>{
            return task.name != taskNameToDelete
        }))
    }

    const HandleDelete = (taskNameToDelete:string)=>{
        CompleteTask(taskNameToDelete);
    }

return (
    <div className="">
        <div className="flex justify-center items-center w-70 bg-red-100">
            <div className="inline-flex">
                <input type="text" 
                    placeholder='Write your ask' 
                    className="bg-red-200 w-1/7 h-10 rounded-2xl"
                    value={task} onChange={handleChange} 
                />
                <button onClick={addTask} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
                    Add
                </button>
            </div>
        </div>
        <div className="bg-green-200  h-96 w-96 ">
            {todoList.map((task:TTask,index:number)=>{
                return <TodoList key={index} task={task}  handleDelete={HandleDelete}/>
            })}
        </div>
    </div>
)
}

export default Task