import { useEffect, useState } from "react";

export default function useStorage(key, initialValue) {
  const [storage, setStorage] = useState(() => {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : initialValue;
  });

  const setValue = (value) => {
    const val = value instanceof Function ? value(storage) : value;
    setStorage(val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  return [storage, setValue];
}
