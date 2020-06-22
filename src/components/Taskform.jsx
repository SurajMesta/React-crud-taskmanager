import React,{useState,useContext,useEffect} from 'react'
import {TaskContext} from '../context/Taskcontext'

 const Taskform = () => {
     const {addTitle,clearTask,editItem,editTask}=useContext(TaskContext)
     const [data,setData]=useState("")

     const handlOnChange=(e)=>{
       setData(e.target.value)
       console.log(data)
         
     
     }

     const handleonSubmit=(e)=>{
         e.preventDefault()
        
         if(editItem===null){
            addTitle(data)
            setData("")
         }

         else{
             editTask(data,editItem.id)
     
         }
         
         }

     useEffect(()=>{
         if(editItem!==null){
             setData(editItem.task)
         }
         else{
             setData("")
         }

     },[editItem])
    return (
       <form onSubmit={handleonSubmit} style={{backgroundColor:'darkslategray'}}>
           <div className="form-group" style={{backgroundColor:'darkslategray'}}>

               <input autoFocus type="text" className="form-group" name="text" value={data} onChange={handlOnChange} placeholder="Enter Task Here" required style={{backgroundColor:'snow',borderRadius:'5px',marginTop:'10px'}}/>
           </div>
           <div className="form-group text-center" style={{backgroundColor:'darkslategray'}}>
    <button type="submit" className="btn btn-sm btn-info">{editItem?'Edit':'Add'}</button>
               <button type="reset" onClick={()=>{
                   clearTask()
               }} className="btn btn-sm btn-warning">Clear</button>
           </div>
       </form>
    )
}

export default Taskform
