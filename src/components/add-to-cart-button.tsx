'use client'

import { useCart } from "@/contexts/cart-context"

export interface AddtoCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddtoCartButtonProps) {
  const { addToCart } = useCart()

  function handleProductAddToCart() {
    addToCart(productId)
  }

  return (
    <button
    type="button"
    onClick={handleProductAddToCart}
    className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white hover:bg-emerald-800"
  >
    Adicionar ao carrinho
  </button>
  )
}