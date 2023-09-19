import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";

import { Product } from "../types";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}
/** @type {*}
 * Todo we r using create from zustand to manage our store
 * *we gonna use persist that gonna store or persist our data into localStorage
 * in our persist we give the cartStore
 * and then extract the set and the get method
 */

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItem = get().items;
        const existingItem = currentItem.find((item) => item.id === data.id);
        if (existingItem) {
          return toast("Item already in cart.");
        }
        //if not exist we gonna call the set method and set the curent item and use it as a data
        set({ items: [...get().items, data] });
        toast.success("Item added to cart.");
      },
      removeItem(id: string) {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item removed from the cart.");
      },
      removeAll() {
        set({ items: [] });
      },
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);
export default useCart;
