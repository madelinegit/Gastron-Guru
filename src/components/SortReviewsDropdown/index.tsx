import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './SortReviewsDropdown.scss';

interface DropdownProps {
  title: string
  items: string[]
}

const SortReviewsDropdown = ({ title, items }: DropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);

  // TOGGLE DROPDOWN MENU
  const handleOpen = () => setOpen(!open);

  return (
    <div className='dropdown'>
      <button onClick={handleOpen} className='dropdown-btn'>
        {title}
        {open ? <FontAwesomeIcon icon={faChevronUp} size='sm' /> : <FontAwesomeIcon icon={faChevronDown} size='sm' />}
      </button>
      {open && (
        <ul className='dropdown-menu'>
          {items.map((item, i) => (
            <li
              key={i}
              className='menu-item'
            >
              <button>{item}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortReviewsDropdown;