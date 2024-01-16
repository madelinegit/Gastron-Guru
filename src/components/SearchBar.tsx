import { useRef, useState } from 'react';

export default function SearchBar() {
  const inputRef = useRef(null);
  const [placeholder, setPlaceholder] = useState<string>('');

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        id="search-box"
        name="search-box"
        placeholder={placeholder}
      />
    </div>
  );
}
