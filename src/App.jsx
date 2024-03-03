import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import './App.css'

function App() {
const [todoList,setTodoList] = useState([])
const [todoCount,setTodoCount] = useState(0)

function handleAddTodo(todo) {
  setTodoList([...todoList,todo])
  setTodoCount(prev => prev + 1)
}

function handleRemoveTodo(index) {
  setTodoList(todoList.filter((item,i) => i!== index))
  setTodoCount(prev => prev - 1)
}

  return (
    <>
      <h1>СПИСОК ДЕЛ</h1>
      <h3>У вас {todoCount} дел</h3>
      <TodoForm onClick ={handleAddTodo}/>
      <TodoList data = {todoList} handleRemoveTodo = {handleRemoveTodo}/>
    </>
  )
}

export default App
