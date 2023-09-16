import qs from "query-string";
import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;
// the function gonna return a promise that contains the categories

const getProduct = async (id: string): Promise<Product> => {
  // console.log(`URL API ${url}`);
  //to see the result in my front-end i've to make a hard refresh on my browser
  const res = await fetch(`${URL}/${id}`);
  return res.json();
};
export default getProduct;
