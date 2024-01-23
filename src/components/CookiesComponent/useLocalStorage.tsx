import { useState, useEffect } from "react";

function getSavedValue(key: string, defaultValue: boolean) {
  const savedValue = JSON.parse(localStorage.getItem(key) || "null");
  if (savedValue) return savedValue;
  console.log(defaultValue);

  return defaultValue;
}

export default function useLocalStorage(key: string, defaultValue: boolean) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
