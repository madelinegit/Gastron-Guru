import { useState } from 'react';

import './CuisinesDropdown.scss';

const CuisinesDropdown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<string[]>([]);
  const cuisineOptions = ['Italian', 'Mexican', 'Chinese', 'Indian'];

  const toggle = () => setOpen((prevOpen) => !prevOpen);

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
        <div
          tabIndex={0}
          className="header"
          role="button"
          onClick={() => toggle()}
        >

          <h1>Select Your Specialty</h1>
          <label>Cuisines</label>

          {/* if dropdown is open, flip arrow direction */}
          {/* TO-DO: replace 'close' & 'open' with respective arrow icons */}
          {open ? 'Close' : 'Open'}
        </div>

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