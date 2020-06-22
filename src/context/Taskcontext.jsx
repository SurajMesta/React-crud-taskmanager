import React,{createContext,useState,useEffect} from 'react'

export const TaskContext= createContext()

 const TaskcontextProvider = (props) => {
     let data=JSON.parse(localStorage.getItem('user'))||[]
     const [title,setTitle]=useState(data)
  
     const [editItem,setEditItem]=useState(null)

     const addTitle=(task)=>{
         setTitle([...title,{id:Math.random().toFixed(2),task}])
     }

     const clearTask=()=>{
         setTitle([])
     }

     const findItem=(id)=>{
         const foundItem=title.find((item)=> item.id === id)
         setEditItem(foundItem)
         console.log(foundItem)
   
         

     }

     const editTask=(task,id)=>{
         setTitle(title.map((item)=> (item.id==id?{task,id}:item)))
         setEditItem(null)

     }
     const deleteItem=(id)=>{
         setTitle(title.filter((item)=> item.id!==id))
     }

  
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(title))
    },[title])
    return (
        <div>
         <TaskContext.Provider value={{title,addTitle,clearTask,findItem,editItem,editTask,deleteItem}}>
             {props.children}
         </TaskContext.Provider>
        </div>
    )
}


export default TaskcontextProvider
