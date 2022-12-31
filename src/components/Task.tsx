import { FC,useEffect} from "react"

type Props={
  id:number,
  task:string,
  handleDelete:(id:number)=> void
}

const Task:FC<Props> = ({task,handleDelete,id}) => {

  useEffect(()=>{
    console.log('Task',{task})
  })

return (
    <li>{task}
    <button onClick={()=> handleDelete(id)}>X</button>
    
    </li>
  )
}
export default Task