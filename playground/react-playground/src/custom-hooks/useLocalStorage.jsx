import { useEffect, useState } from 'react';
function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  //if initialValue is a fn
  if (initialValue instanceof Function) return initialValue();

  return initialValue;
}
export default function useLocalStorage(key, initialValue) {
  //Lazy Initialization of State
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
