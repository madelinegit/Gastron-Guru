import SwitchInput from "../Inputs/SwitchInput";
import CheckboxInput from "../Inputs/CheckboxInput";
import SearchBar from "../SearchBar";
import "./SearchBarWrapper.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBarWrapper(): JSX.Element {
  //specifies what this code intends to do, create search bar element
  return (
    <div className="search-bar-container">
      <button className="button-primary">
        <p>Search</p>
      </button>
      <button className="button-dark">
        <p>
          Filter <i className="fa-solid fa-caret-down"></i>
        </p>
      </button>
      <CheckboxInput />
      <SwitchInput />
    </div>
  );
}
