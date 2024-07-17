"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const EditButton = ({productDetail}) => {
    const router = useRouter()
  return (
    <>
      <button onClick={()=>router.push(`/editpage/${productDetail?.id}`)} className='border-2 rounded-md p-2 hover:bg-slate-500 mb-3'>Düzenle</button>
    </>
  )
}

export default EditButton
