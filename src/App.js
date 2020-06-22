import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tasklist from './components/Tasklist'
import TaskcontextProvider from './context/Taskcontext'
import Taskform from './components/Taskform'


class App extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className=" col-sm-4 col-xs-12" style={{margin:'auto'}}>
              <div className="col-sm-4"></div>
          <TaskcontextProvider>
            <div className="d1" style={{border:'1px solid green',textAlign:"center",marginTop:'40px',backgroundColor: 'darkslategray',}}>
           <Taskform/>
           <Tasklist/>
            </div>
            
      </TaskcontextProvider>
          </div>
        </div>
     
      </div>
 
 
    )
  }
}
export default App;
