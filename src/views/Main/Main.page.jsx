import React, {useState} from 'react';
import Box from '../../components/Box/Box';
import './Main.page.scss'
import Education from '../../components/Education/Education';
import SideBar from '../../components/SideBar/SideBar';
import Expertise from '../../components/Expertise/Expertise';
import Portfolio from '../../components/Portfolio/Portfolio'
import Feedback from '../../components/Feedback/Feedback';
import AddressComponent from '../../components/Address/Address';
import { Element } from 'react-scroll';
import {Link} from 'react-scroll';
import  { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Skills from '../../components/Skills/Skills';
import { boxData, timeline, addressData, expertiseData, feedData } from '../../utils/data.js';

const MainPage = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = (isExpanded) => {
    setSidebarOpen(isExpanded);
  };

  return (
    <main className="main-page" data-testid="main-page">
      <Link to="aboutSection" spy={true} smooth={true} duration={500} className='absolute-but' offset={-100}  activeClass="activeNavItem">
        <FontAwesomeIcon  icon={faChevronUp} color='white' />
      </Link>
      <div className='test'>
        <SideBar toggleSidebar={handleToggleSidebar}/>
      </div>
      
      <section className={isSidebarOpen ? 'content' : 'content-NX'}>
        <Element name="aboutSection">
          <Box title={boxData.title} content={boxData.content} />
        </Element>
        <Element name='educationSection'>
          <Education timeLine={timeline} title="Education"/>
        </Element>
        <Element name='experienceSection'>
          <Expertise data={expertiseData} title="Experience"/>
        </Element>
        <Element name='skillsSection'>
          <Skills/>
        </Element>
        <Element name='portfolioSection'>
          <Portfolio title="Portfolio"/>
        </Element>
        <Element name='contactsSection'>
          <AddressComponent data={addressData} title="Contacts"/>
        </Element>
        <Element name='feedbacksSection'>
          <Feedback data={feedData} title="Feedbacks"/>
        </Element>
      </section>
    </main>
  );
};

export default MainPage;