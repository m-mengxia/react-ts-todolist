// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react'

import { useTodo } from '../context'
import { Input } from './Input'

export const AddTodo = () => {
  const [input, setInput] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const { addTodo } = useTodo()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      addTodo(input)
      setInput('')
      alert('添加成功')
    } else {
      alert('输入框不能为空')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <Input
          value={input}
          onChange={e => setInput(e.target.value)}
          ref={inputRef}
          type="text"
        />
        <button>添加</button>
      </p>
    </form>
  )
}
