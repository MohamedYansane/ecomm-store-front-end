import { Color } from "@/types";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;
/**
 *Todo this function gonna return a promise that contains all colors
 *
 * @return {*}  {Promise<Size[]>}
 */
const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);
  return res.json();
};
export default getColors;
