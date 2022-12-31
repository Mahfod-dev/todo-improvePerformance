import { Todo } from "../components/List";



export function getFilteredTodo(todoList:Todo[],term:string){
console.log('filtering',term)
return todoList.filter((todo:Todo)=>

todo.task.toLowerCase().includes(term.toLowerCase())
)
}