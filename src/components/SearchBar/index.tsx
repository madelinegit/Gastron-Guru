import React from "react";
import { useEffect, useRef, useState } from "react";
import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
interface SearchBarProps {
  handleSearch: (query: string) => void;
}
export default function SearchBar({ handleSearch }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
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
  }, [placeholder]);
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    if (inputRef.current) {
      handleSearch(inputRef.current.value);
    }
  } 
  return (
      <form className="search-input-group" onSubmit={handleFormSubmit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="light-icon" />
        <input
          type="text"
          ref={inputRef}
          id="search-box"
          className="search-box"
          name="search-box"
          tabIndex={0}
          placeholder={placeholder as string}
          />
        <button className="button-primary buttonsize" type="submit" tabIndex={0}><span>Search</span></button>
      </form>
  );
}
