"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/container";
import CartItem from "./components/cart-item";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import Summary from "./components/summary";

const revalidate = 0;
const CartPage = () => {
  const cart = useCart();
  //*handling hydration error

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className="bg-white">
        <Container>
          <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
              <div className="lg:col-span-7">
                {cart.items.length === 0 && (
                  <p className="text-neutral-500">No items added to cart.</p>
                )}
                <ul>
                  {cart.items.map((item: Product) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </ul>
              </div>
              <Summary />
            </div>
          </div>
        </Container>
      </div>{" "}
    </div>
  );
};

export default CartPage;
