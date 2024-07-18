'use client'
import { Navbar, ProductDetails } from '@/app/components'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { useParams } from 'next/navigation'
import React from 'react'

const Page = async () => {
  const {slug}:any =useParams()
  const products = await client.fetch(groq`*[_type=="product"]`)
  const product = products.find((product:any)=>product.slug.current ==slug)
  // console.log(product)
  return (
    <>
     <Navbar/>
     <ProductDetails/>
    </>
  )
}

export default Page
