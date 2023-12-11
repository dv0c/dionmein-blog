import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ParamsTypes } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function api(url: string, params: ParamsTypes) {
  return await axios.get(process.env.URL + url, {
    params: {
      key: process.env.KEY,
      ...params,
    },
  });
}
