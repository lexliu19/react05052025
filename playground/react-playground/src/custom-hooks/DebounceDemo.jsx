import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

export default function DebounceDemo() {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedText) {
      console.log('Search Query:', debouncedText);
    }
  }, [debouncedText]);

  return (
    <>
      <label htmlFor="userInput">Debounce Demo</label>
      <input
        id="userInput"
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}
