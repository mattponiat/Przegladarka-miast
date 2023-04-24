import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
//Helper function for shadcn/ui components
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
