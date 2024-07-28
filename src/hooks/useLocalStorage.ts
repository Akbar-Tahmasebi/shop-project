import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, ininialValue: T) {
  const [value, setValue] = useState<T>(() => {
    let localCart = localStorage.getItem(key);

    if (localCart != null) {
      return JSON.parse(localCart);
    } else {
      return ininialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
