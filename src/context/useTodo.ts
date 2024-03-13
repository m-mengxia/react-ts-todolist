import { useContext } from 'react'
import { TodoContext } from './TodoContext'

export const useTodo = () => {
  const context = useContext(TodoContext)

  if (!context) {
    throw new Error('useTodo 必须在 TodoProvider 组件中')
  }

  return context
}
