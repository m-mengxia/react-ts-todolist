// @ts-nocheck
import { useEffect, useRef, useState } from 'react'
import type { Todo } from '../context'
import { useTodo } from '../context'
import { Input } from './Input'

export const TodoItem = (props: { todo: Todo }) => {
  const { todo } = props
  const { deleteTodo, editTodo, updateTodoStatus } = useTodo()

  const [editingText, setEditingText] = useState<string>('')
  const [editingId, setEditingId] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editingId && inputRef.current) {
      inputRef.current.focus()
    }
  }, [editingId])

  const handleDelete = (todoId: string) => {
    deleteTodo(todoId)
    alert('删除成功')
  }

  const handleUpdateStatus = (todoId: string) => {
    updateTodoStatus(todoId)
  }

  const handleEdit = (todoId: string, todoText: string) => {
    setEditingId(todoId)
    setEditingText(todoText)
  }

  const handleUpdate = () => {
    if (editingText.trim() === '') {
      alert('内容为空')
      return
    }

    editTodo(editingId, editingText)
    setEditingId('')
    setEditingText('')
  }

  const isDone = todo.status === 'complated'

  return (
    <li>
      {editingId ? (
        <>
          <Input
            ref={inputRef}
            value={editingText}
            onChange={e => setEditingText(e.target.value)}
            type="text"
          />

          <button
            onClick={handleUpdate}
            style={{
              margin: '10px',
            }}
          >
            更新
          </button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: isDone ? 'line-through' : 'none',
            }}
          >
            {todo.text}{' '}
          </span>
          <button
            onClick={() => {
              handleEdit(todo.id, todo.text)
            }}
            style={{
              margin: '10px',
            }}
          >
            编辑
          </button>

          <button
            onClick={() => {
              handleUpdateStatus(todo.id)
            }}
            style={{
              margin: '10px',
            }}
          >
            {isDone ? '未完成' : '已完成'}
          </button>
          <button
            onClick={() => {
              handleDelete(todo.id)
            }}
          >
            删除
          </button>
        </>
      )}
    </li>
  )
}
