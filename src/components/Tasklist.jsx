import React,{useContext} from 'react'
import {TaskContext} from '../context/Taskcontext'
import Tasks from './Tasks'
 const Tasklist = () => {
    const {title}=useContext(TaskContext)
    return (
        <ul className="list-group">
            {title.map((item)=>{
               return <Tasks item={item} key={item.id}/>
            })}
        </ul>
    )
}

export default Tasklist;
