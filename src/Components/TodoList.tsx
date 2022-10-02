import React from 'react'
import {TTask} from './Type'
interface Props {
  task: TTask;
  handleDelete: (taskNameToDelete:string)=>void;
}

function TodoList({task,handleDelete}:Props) {

  return (
    <div className=" flex mb-4">
        <div className="w-3/4 bg-gray-300 h-12 py-2 px-4">
          {task.name}
        </div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-1/4 h-12"
        onClick={()=> handleDelete(task.name)
        }>X</button>
    </div>
  )
}

export default TodoList;