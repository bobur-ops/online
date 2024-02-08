import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useMediaQuery } from "usehooks-ts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function isRecordStrStr(value: any): value is Record<string, string> {
  return value !== null && typeof value === 'object';
}

function isArrayOfTupleStrStr(value: any): value is [string, string][] {
  return Array.isArray(value)
    && value.every(
      (item) => Array.isArray(item)
        && item.length === 2
        && typeof item[0] === 'string'
        && typeof item[1] === 'string')
}


/** wrapper of fetch with injected 'Authorization' header */
export async function authFetch(...arg: Parameters<typeof fetch>) {
  // inserting Authorization header
  const headers = arg[1]?.headers;
  if (headers) {
    if (isRecordStrStr(headers)) {
      headers['Authorization'] = 'token'
    } else if (isArrayOfTupleStrStr(headers)) {
      headers.push(['Authorization', 'token'])
    } else {
      headers.append('Authorization', 'token')
    }
  }
  return await fetch(...arg);
}


export function useIsMobile() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return isMobile;
}

export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}
