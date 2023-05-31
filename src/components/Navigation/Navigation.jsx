import React from 'react';
import './Navigation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGraduationCap, faPencil, faSuitcase, faLocationArrow, faComment } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll';

const Navigation = () => {
  
  return (
    <nav className='nav'>
        <Link to="aboutSection" spy={true} smooth={true} duration={500} className='nav__link' offset={-100}  activeClass="activeNavItem">
          <FontAwesomeIcon className='nav__icon' icon={faUser} color='#667081' />
          <span className='nav__title'>About me</span>
        </Link>
        <Link to="educationSection" spy={true} smooth={true} duration={500} className='nav__link' offset={-100}  activeClass="activeNavItem">
          <FontAwesomeIcon className='nav__icon' icon={faGraduationCap} color='#667081' />
          <span className='nav__title'>Education</span>
        </Link>
        <Link to="experienceSection" spy={true} smooth={true} duration={500} className='nav__link' offset={-100}  activeClass="activeNavItem">
          <FontAwesomeIcon className='nav__icon' icon={faPencil} color='#667081' />
          <span className='nav__title'>Experience</span>
        </Link>
        <Link to="skillsSection" spy={true} smooth={true} duration={500} className='nav__link' offset={-100}  activeClass="activeNavItem">
          <FontAwesomeIcon className='nav__icon' icon={faPencil} color='#667081' />
          <span className='nav__title'>Skills</span>
        </Link>
        <Link to="portfolioSection" spy={true} smooth={true} duration={500} className='nav__link' offset={-100}  activeClass="activeNavItem">
          <FontAwesomeIcon className='nav__icon' icon={faSuitcase} color='#667081' />
          <span className='nav__title'>Portfolio</span>
        </Link>
        <Link to="contactsSection" spy={true} smooth={true} duration={500} className='nav__link' offset={-200}  activeClass="activeNavItem">
          <FontAwesomeIcon className='nav__icon' icon={faLocationArrow} color='#667081' />
          <span className='nav__title'>Contacts</span>
        </Link>
        <Link to="feedbacksSection" spy={true} smooth={true} duration={500} className='nav__link' offset={-250}  activeClass="activeNavItem">
          <FontAwesomeIcon className='nav__icon' icon={faComment} color='#667081' />
          <span className='nav__title'>Feedbacks</span>
        </Link>
    </nav>
  );
};

export default Navigation;
