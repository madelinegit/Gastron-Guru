import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faX } from '@fortawesome/free-solid-svg-icons';
import './CuisinesDropdown.scss';

const CuisinesDropdown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<string[]>([]);
  // mock data
  const cuisineOptions = ['Japanese', 'Ukranian', 'Russian', 'Polish', 'Italian', 'Mexican', 'Chinese', 'Indian'];

  const toggle = () => setOpen((prevOpen) => !prevOpen);

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

  return (
    <>
      <div className="dropdown-container">
        <h3>Select Your Specialty</h3>
        <label>Cuisines</label>
        <div
          tabIndex={0}
          className="dropdown-box"
          role="button"
          onClick={() => toggle()}
        >
          {/* display selected cuisines or default message */}
          {selection.length > 0 ? (
            <ul>
              {selection.map((selectedCuisine) => (
                <li key={selectedCuisine} onClick={(event) => handleClick(event, selectedCuisine)} className="selected-cuisine">
                  {selectedCuisine} <FontAwesomeIcon icon={faX} />
                </li>
              ))}
            </ul>
          ) : (
            <p>Select cuisine type</p>
          )}

          {/* if dropdown is open, flip arrow direction */}
          {open ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
        </div>

        {/* display cuisines list if clicked */}
        {open && (
          <ul className="cuisines-list">
            {cuisineOptions.map((cuisine) => (
              <li
                key={cuisine}
                className={selection.includes(cuisine) ? 'selected' : ''}
                onClick={(event) => handleClick(event, cuisine)}
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