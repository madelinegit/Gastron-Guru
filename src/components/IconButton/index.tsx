import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './IconButton.scss';
type IconButtonProps = {
    type: 'button' | 'submit' | 'reset';
    label: string;
    icon: IconProp;
    iconPosition: 'before' | 'after';
    backgroundColor?: string;
    onClick: () => void;
};

const IconButton = ({ type, label, icon, iconPosition, onClick }: IconButtonProps) => {
    return (
        <button className='icon-button' type={type} onClick={onClick}>
            {iconPosition === 'before' && <FontAwesomeIcon className='icon' icon={icon} />}
            {label}
            {iconPosition === 'after' && <FontAwesomeIcon className='icon' icon={icon} />}
        </button>
    );
};

export default IconButton;