import { z } from 'zod'
import data from '../data.json'

interface RequestParams {
  params: {
    slug: string
  }
}

export async function GET(_: Request, { params }: RequestParams) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const slug = z.string().parse(params.slug)
  const product = data.products.find(product => product.slug === slug)
  if(!product) {
    return Response.json({ message: 'Product not found' }, { status: 404 })
  }
  return Response.json(product)
}