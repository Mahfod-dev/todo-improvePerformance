import { FC, useEffect,memo } from "react"
import Task from "./Task"


export type Todo={
    id:number,
    task:string
}

interface Props{
    todoList: Todo[],
    handleDelete:(id:number) => void
}

const List:FC<Props> = ({todoList,handleDelete}) => {

useEffect(()=>{
  console.log('list','<List/>')

})

return (
    <ul>
        {
            todoList.map(todo=> <Task key={todo.id} id={todo.id} task={todo.task} handleDelete={handleDelete}/>)
        }


    </ul>
  )
}
export default List