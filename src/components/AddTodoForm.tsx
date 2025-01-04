import React from 'react'
import Button from './Button'

export default function AddTodoForm() {
  return (
    <form >
        <h2 className='font-medium text-[#231d15]'>Add Todo</h2>
        <input type='text' className='h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px]'/>
        <Button/>
    </form>
  )
}