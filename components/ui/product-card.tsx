"use client";
import React, { MouseEventHandler } from "react";
import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  // so now  i want to when we clik an image to be redirected
  //to the individual product card
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const previewModal = usePreviewModal();

  //* i created this after creating a provider folder
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    //le stop propagation va prendre en compte qu'on a un event handleClick
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  //cart
  const cart = useCart();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    //le stop propagation va prendre en compte qu'on a un event handleClick
    event.stopPropagation();
    cart.addItem(data);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/**I'm gonna create images and actions */}
      <div
        className="aspect-square rounded-xl bg-gray-100 relative"
        onClick={handleClick}
      >
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
        {/** a group-hover means when we hover like a product precisely the fist div
         * at the top so we gonna see icon like add product and add to the whishlist
         */}
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price & Review */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
