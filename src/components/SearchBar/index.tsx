import { useEffect, useRef, useState } from "react";
import "./SearchBar.scss";

export default function SearchBar() {
  const inputRef = useRef(null);
  const [placeholder, setPlaceholder] = useState<string>("");

  const stringToSplit: string = "Search chefs in your location";

  useEffect(() => {
    const splittedString: string[] = stringToSplit.split("");
    let index: number = -1;

    const timer = setTimeout(() => {
      setInterval(() => {
        if (placeholder == stringToSplit) {
          return;
        }
        if (index < splittedString.length) {
          index++;
          if (splittedString[index] != undefined) {
            setPlaceholder((prevText) => prevText + splittedString[index]);
          }
        }
      }, 200);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="search-bar-container">
      <input
        type="text"
        ref={inputRef}
        id="search-box"
        className="search-box"
        name="search-box"
        placeholder={placeholder as string}
      />
    </div>
  );
}
