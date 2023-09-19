import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
//to resolve these errors clx tailwind merge i've to
//install both of them npm i clsx tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
