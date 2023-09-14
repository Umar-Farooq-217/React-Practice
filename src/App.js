import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
const [tasks ,setTasks] = useState([])
const [inputValue , setInputValue]= useState('')

const changeHandler = (e)=>{
setInputValue(e.target.value)
}
const addHandler = ()=>{
if(inputValue.trim() !== ''){
  const newTask = {
    id : Date.now(),
    text: inputValue
  };
  setTasks([...tasks,newTask])
  setInputValue('')
}
}
const handleDeleteTask =(taskId)=>{
const restTasks = tasks.filter(task => task.id !== taskId)
setTasks(restTasks)
}
const handleEditTask = (taskid,newText)=>{
const updateTasks = tasks.map(task =>{
  if(task.id === taskid){
    return{...task, text:newText}
  }
    return task
  
  })
  setTasks(updateTasks)
}



  return (
    <div className=''>
<input type="text"placeholder='Enter Task' value={inputValue}  onChange={changeHandler}/>
<button className='btn btn-outline-danger' onClick={addHandler}>submit</button>


<ul>
{tasks.map(task => (
          <li style={{listStyle:'none',position:'relative',top:'20px',maxWidth:'100%'}} key={task.id}>
            <p style={{marginTop:'20px',border:'2px solid black',fontSize:'30px',backgroundColor:'white'}}>{task.text}</p>
            <button className='btn btn-outline-dark' onClick={() => handleEditTask(task.id, prompt('Edit Task:', task.text))}>
              Edit
            </button>
            <button className="btn btn-outline-danger" onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
</ul>
    </div>
  );
}

export default App;
