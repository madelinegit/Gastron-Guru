import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import useChef from "../../utils/Api";
import "./CuisinesDropdown.scss";

type CuisinesDropdownProps = {
  specialClassName: string;
  cuisines: string[];
};

type CuisinesDropdownComponentProps = CuisinesDropdownProps & {
  onChange: (fields: Partial<CuisinesDropdownProps>) => void;
};

const CuisinesDropdown = ({
  specialClassName,
  cuisines,
  onChange,
}: CuisinesDropdownComponentProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<string[]>(cuisines);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const toggle = () => setOpen((prevOpen) => !prevOpen);
  const chefData = useChef();

  // extract every cuisines offered from all chefs without repetition
  const cuisinesList = Array.from(
    new Set(chefData.flatMap((chef) => chef.cuisines || []))
  );

  // if cuisine is clicked, it will add or remove from array
  function handleSelect(
    event:
      | React.MouseEvent<HTMLLIElement, MouseEvent>
      | React.KeyboardEvent<HTMLLIElement>,
    item: string
  ) {
    event.stopPropagation();

    const newSelection = [...selection];
    const index = newSelection.indexOf(item);

    if (index === -1) {
      newSelection.push(item);
    } else {
      newSelection.splice(index, 1);
    }

    setSelection(newSelection);
    // BUG: selection is always missing the last selected cuisine
    onChange({ cuisines: newSelection });
  }

  // handle keyboard navigation within the dropdown
  const handleKeyControls = (
    e: React.KeyboardEvent<HTMLLIElement>,
    item: string,
    index: number
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSelect(e, item);
    } else if (e.key === "ArrowUp" && index > 0) {
      e.preventDefault();
      setHighlightedIndex(index - 1);
    } else if (e.key === "ArrowDown" && index < cuisinesList.length - 1) {
      e.preventDefault();
      setHighlightedIndex(index + 1);
    }
  };

  return (
    <>
      <div className={`dropdown-container ${specialClassName}`}>
        <label>Cuisines</label>
        <button
          className="dropdown-box"
          onClick={() => toggle()}
          role="combobox"
          aria-haspopup="listbox"
          aria-controls="cuisines-list"
          aria-expanded={open}
        >
          {/* display selected cuisines or default message */}
          {selection.length > 0 ? (
            <ul>
              {selection.map((selectedCuisine) => (
                <li
                  key={selectedCuisine}
                  onClick={(e) => handleSelect(e, selectedCuisine)}
                  className="selected-cuisine"
                >
                  {selectedCuisine} <FontAwesomeIcon icon={faX} />
                </li>
              ))}
            </ul>
          ) : (
            <p>Select cuisine type</p>
          )}

          {/* if dropdown is open, flip arrow direction */}
          {open ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>

        {/* display cuisines list if clicked */}
        {open && (
          <ul
            className="cuisines-list"
            role="listbox"
            ref={dropdownRef}
            aria-multiselectable={true}
          >
            {cuisinesList.map((cuisine, index) => (
              <li
                key={cuisine}
                className={cuisines.includes(cuisine) ? "selected" : ""}
                onClick={(event) => handleSelect(event, cuisine)}
                onKeyDown={(e: React.KeyboardEvent<HTMLLIElement>) =>
                  handleKeyControls(e, cuisine, index)
                }
                role="option"
                tabIndex={0}
                aria-selected={cuisines.includes(cuisine)}
                aria-hidden="true"
                aria-label={cuisine}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {cuisine}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CuisinesDropdown;
