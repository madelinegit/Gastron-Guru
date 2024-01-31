import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faX } from '@fortawesome/free-solid-svg-icons';
import useChef from '../../utils/Api';
// import { CuisinesDropdownProps } from './types';
import './CuisinesDropdown.scss';

const CuisinesDropdown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<string[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const dropdownRef = useRef(null);
  const toggle = () => setOpen((prevOpen) => !prevOpen);
  const chefData = useChef();

  // extract every cuisines offered from all chefs without repetition
  const cuisinesList = Array.from(
    new Set(chefData.flatMap(chef => chef.cuisines || [])
  ));

  // if cuisine is clicked, it will add or remove from array
  function handleClick(event: React.MouseEvent, item: any) {
    event.stopPropagation();

    const newSelection = [...selection];
    const index = newSelection.indexOf(item);

    if (index === -1) {
      newSelection.push(item);
    } else {
      newSelection.splice(index, 1);
    };

    setSelection(newSelection);
  };

  // handle keyboard navigation within the dropdown
  const handleKeyControls = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex !== -1) {
        const selectedCuisine = cuisinesList[highlightedIndex];
        handleClick(e, selectedCuisine);
      } else if (e.key === 'ArrowUp' && highlightedIndex > 0) {
        setHighlightedIndex(prevIndex => prevIndex - 1);
      } else if (e.key === 'ArrowDown' && highlightedIndex < cuisinesList.length - 1) {
        setHighlightedIndex(prevIndex => prevIndex + 1);
      }
    }
  };

  // close dropdown menu when clicking outside the box
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="dropdown-container">
        <h3>Select Your Specialty</h3>
        <label>Cuisines</label>
        <button
          tabIndex={0}
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
                  onClick={(event) => handleClick(event, selectedCuisine)}
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
          {open ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
        </button>

        {/* display cuisines list if clicked */}
        {open && (
          <ul
            className="cuisines-list"
            role="listbox"
            ref={dropdownRef}
            aria-multiselectable={true}
            onKeyDown={handleKeyControls}
          >
            {cuisinesList.map((cuisine, index) => (
              <li
                key={cuisine}
                className={selection.includes(cuisine) ? 'selected' : ''}
                onClick={(event) => handleClick(event, cuisine)}
                role="option"
                tabIndex={0}
                aria-selected={selection.includes(cuisine)}
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