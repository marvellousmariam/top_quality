
import React from 'react'
import Card from './Card'
import Link from 'next/link'

const Products =async ({products}:any) => {
    
  return (
    <div className='bg-gray-100 w-full py-12 mt[125px]'>
        <div className='container'>
         <div className='py-4'>
            <h1 className='text-3xl font-bold'>Best Selling</h1>
            <h1>Enjoy Upto 50%</h1>
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 mx-10  md:grid-cols-4 gap-2 mt-6'>
{
    products.map((product:any,index:number)=>(
        <Link href={`/product/${product.slug.current}`}> <Card key={index} product={product} /></Link>
    ))
}
         </div>

        </div>

    </div>
  )
}

export default Products