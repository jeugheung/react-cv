import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import './Button.scss'

const Button = ({ icon, text, url, type}) => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(url);
  };

  return (
    <button className={type} onClick={handleButtonClick}>
      {icon && <span className="icon"><FontAwesomeIcon icon={icon} /></span>}
      <p className='text'>{text}</p>
    </button>
  );
};

export default Button
