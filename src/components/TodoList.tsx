// @ts-nocheck
import { useTodo } from '../context/useTodo.ts'
import { TodoItem } from './TodoItem.tsx'

export const TodoList = () => {
  const { todos } = useTodo()

  if (todos.length === 0) {
    return <div>暂无待办</div>
  }

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  )
}
