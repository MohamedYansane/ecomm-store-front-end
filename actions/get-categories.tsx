import { Category } from "@/types";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
// the function gonna return a promise that contains the categories
const getCategories = async (): Promise<Category[]> => {
  // console.log(`URL API ${URL}`);
  //to see the result in my front-end i've to make a hard refresh on my browser
  const res = await fetch(URL);
  return res.json();
};
export default getCategories;
