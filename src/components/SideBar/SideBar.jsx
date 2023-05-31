import React, { useState } from 'react';
import './SideBar.scss'
import home_avatar from '../../assets/images/home-avatar.png';
import Navigation from '../Navigation/Navigation';
import PhotoBox from '../PhotoBox/PhotoBox';
import Button from '../Button/Button';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({toggleSidebar}) => {

  const [isExpended, setExpendState] = useState(true)

  const handleClick = () => {
    setExpendState(!isExpended);
    toggleSidebar(!isExpended);
  };

  return (
    <section className={isExpended ? 'side-nav-container' : 'side-nav-container side-nav-container-NX'}>
      <div className="hamburger" onClick={handleClick}></div>
      <div className='nav-upper'>
          <PhotoBox type={2} avatar={home_avatar} name='John Doe'></PhotoBox>
          <Navigation/>
          <Button icon={faAngleLeft} text="Go back" url="/" type="nav-button"></Button>
      </div>
    </section>
  )
}

export default SideBar