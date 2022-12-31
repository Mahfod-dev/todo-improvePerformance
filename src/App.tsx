import {useEffect, useMemo, useState,useCallback } from 'react'
import List from './components/List'
import './App.css'
import { getFilteredTodo } from './helpers/filteredTodoList'


const initialTodos =[{
  id:1,task:'Go shopping'
},
{ id:2,task:'Pay the electricity'}
]



function App() {
const [todoList,setTodoList] = useState(initialTodos)
const [task,setTask] = useState("")
const [searchTerm,setSearch] = useState('')

useEffect(()=>{
  console.log('rendering <App/>')
})

const handleCreate = ()=>{
  const newTodo = {
    id:Date.now(),
    task
  }

setTodoList([...todoList,newTodo])
setTask('')
}

const handleSearch =()=>{
  setSearch(task)
}
const filteredTodoList =useMemo(()=>getFilteredTodo(todoList,searchTerm),[todoList,searchTerm])     

const handleDelete =useCallback(
 (taskId:number)=>{

  const newFilterArray = todoList.filter(todo=> todo.id !== taskId)

  setTodoList(newFilterArray)

},
  [todoList],
)




return (
    <div className="App">
        <input type="text" value={task} onChange={e=> setTask(e.target.value)} />
        <button onClick={handleCreate}>Create</button>
        <button onClick={handleSearch}>Search</button>

    <List todoList={filteredTodoList} handleDelete={handleDelete}/>

    </div>
  )
}

export default App
