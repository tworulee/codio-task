"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Products = ({dt}) => {
  const router = useRouter()
  return (
    <div onClick={()=>router.push(`product/${dt?.id}`)} className='  border-2 rounded-md shadow-lg mb-5 cursor-pointer' >
      <div className=' min-w-[390px] ml-3 mt-2'>
      <Image className=' rounded'  width={380} height={400} src={dt.avatar} />
      </div>
      <div className='text-center m-4 '>
      <h1 className='font-black'> {dt.name}</h1>
      <h1>Marka: {dt.brand}</h1>
      <h1>Fiyat: {dt.price}</h1>
      <h1>Oluşturulma Zamanı: {dt.createdAt}</h1>
      </div>
      <div className='flex items-center justify-center gap-8'>
        <button className='border-2 rounded-md p-2 hover:bg-slate-500 mb-3'>Düzenle</button>
        <button className='border-2 rounded-md p-2 hover:bg-amber-300 mb-3'>Sil</button>
      </div>
      
    </div>
  )
}

export default Products
