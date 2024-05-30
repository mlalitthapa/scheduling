/* eslint-disable @typescript-eslint/no-explicit-any */
export default function debounce(fn: (...args: any) => void, delay: number) {
  let timeoutId: any;
  return (...args: any) => {
    if (timeoutId) clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}