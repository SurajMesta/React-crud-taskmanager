import React,{useContext} from 'react'
import {TaskContext} from '../context/Taskcontext'

 const Tasks = ({item}) => {
     const{findItem,deleteItem}=useContext(TaskContext)
    return (
        <li className="list-group-item text-center" style={{backgroundColor:'darkslategray',border:'none'}}>
        
          <span style={{backgroundColor:'darkslategray',color:'snow',marginRight:'10px'}}>{item.task}  </span>
          <div style={{backgroundColor:'darkslategray',marginTop:'10px'}}>
          <button  style={{marginRight:'10px'}} className="btn btn-sm btn-info" onClick={()=>{
              findItem(item.id)
          }}><span className="glyphicon glyphicon-edit"></span></button>
          <button className="btn btn-sm btn-warning" onClick={()=>{
           deleteItem(item.id)
          }}><span className="glyphicon glyphicon-trash"></span></button>
          </div>
     
        </li>
    )
}


export default Tasks
