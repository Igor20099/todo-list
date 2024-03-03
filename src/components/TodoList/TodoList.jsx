import TodoItem from "../TodoItem/TodoItem"
import styles from './TodoList.module.css'

export default function TodoList({data,handleRemoveTodo}) {
    return (
        <ul className={styles.todo_list}>
            { data.map((todo,index) => {
               return <TodoItem todo ={todo} index ={index} handleRemoveTodo = {handleRemoveTodo}/>
            })}
        </ul>
    )
}