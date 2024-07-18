import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { groq } from 'next-sanity'
import Image from 'next/image'
import React from 'react'

const Products =async () => {
    const products = await client.fetch(groq`*[_type=="product"]`)
  return (
    <div className='bg-gray-100 w-full py-12 mt[125px]'>
        <div className='container'>
         <div className='py-4'>
            <h1 className='text-3xl font-bold'>Best Selling</h1>
            <h1>Enjoy Upto 50%</h1>
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-x-1 mt-6'>
{
    products.map((product:any,index:number)=>(
        <div className='bg-white pt-10 drop-shadow-md rounded-lg overflow-hidden'>
    <Image src={urlFor(product.images && product.images[0]).url()} alt={product.slug} width={220} height={100} className='object-cover h-32 mx-auto'/>
<div className='text-center py-10'>
    <h1 className='text-2xl font-bold'>{product.name}</h1>
    <h1 className='text-xl text-gray-500'>${product.price}</h1>
    </div>
</div>
    ))
}
         </div>

        </div>

    </div>
  )
}

export default Products