import { useEffect, useState } from "react"
import { getTodos } from './api.service'


export default function Home() {

  const [todo, setTodo] = useState([])
  useEffect(() => {
    getTodos().then(data => {
      // console.log(data);
      setTodo(data);
    })

  },[])

  return (
    <div>
      Next js Unit Test
      {todo.length > 1 && todo.map(item => <div key={item.id}>{item.title}</div>)}
    </div>
  )
}
