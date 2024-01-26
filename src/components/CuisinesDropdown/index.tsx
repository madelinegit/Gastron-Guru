import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './CuisinesDropdown.scss';

const CuisinesDropdown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<string[]>([]);
  const cuisineOptions = ['Italian', 'Mexican', 'Chinese', 'Indian'];

  const toggle = () => setOpen((prevOpen) => !prevOpen);

  // if cuisine is clicked, it will add or remove from array
  function handleClick(item: any) {
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
          className="header"
          role="button"
          onClick={() => toggle()}
        >
          <p>Select cuisine type</p>

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
              >
                <button type="button" onClick={() => handleClick(cuisine)}>
                  {cuisine}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CuisinesDropdown;