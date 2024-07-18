import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '@/sanity/lib/image'

const Card = ({product}:any) => {
  return (
  
        <div className='bg-white pt-10 drop-shadow-md rounded-lg overflow-hidden'>
    <Image src={urlFor(product.images && product.images[0]).url()} alt={product.slug} width={220} height={100} className='object-cover h-32 mx-auto'/>
<div className='text-center py-10'>
    <h1 className='text-2xl font-bold'>{product.name}</h1>
    <h1 className='text-xl text-gray-500'>${product.price}</h1>
    </div>
</div>
  )
}

export default Card
