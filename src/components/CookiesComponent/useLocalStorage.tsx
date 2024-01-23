import { useState, useEffect } from "react";

interface LocalStorage {
  key: string;
  defaultValue: boolean;
}

/* const useLocalStorage = ({ key, defaultValue }: LocalStorage) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage; */

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
/* Goal is to make custom hook
    We should only need it to come up once 
    Will only appear if the user has not been to the site before otherwise save to local storage

*/
