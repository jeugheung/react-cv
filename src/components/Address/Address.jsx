import React from 'react';
import './Address.scss'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faSkype } from '@fortawesome/free-brands-svg-icons'
import Title from '../Title/Title';

const AddressComponent = ({ data, title }) => {
  const { phone, email, twitter, facebook, skype } = data;

  return (
    <section className='address'>
      <Title title={title}></Title>
      <div className='address__list'>
        <div className='address__item-phone'>
          <FontAwesomeIcon  icon={faPhone} color='#26C17E' className='address__icon'/>
          <a href={`tel:${phone}`} className='address__href'>{phone}</a>
        </div>

        <div className='address__item-phone'>
          <FontAwesomeIcon  icon={faEnvelope} color='#26C17E' className='address__icon'/>
          <a href={`mailto:${email}`} className='address__href'>{email}</a>
        </div>
        
        <div className='address__item-social'>
          <FontAwesomeIcon icon={faTwitter} color='#26C17E' className='address__icon'/>
          <div>
            <span className='address__social-title'>{twitter.title}</span>
            <a className='address__social-link' href={twitter.link} target='_blank' rel="noreferrer">{twitter.link}</a>
          </div>
        </div>

        <div className='address__item-social'>
          <FontAwesomeIcon icon={faFacebookF} color='#26C17E' className='address__icon'/>
          <div className='address__social-text'>
            <span className='address__social-title'>{facebook.title}</span>
            <a className='address__social-link' href={facebook.link} target='_blank' rel="noreferrer">{facebook.link}</a>
          </div>
        </div>

        <div className='address__item-social'>
          <FontAwesomeIcon icon={faSkype} color='#26C17E' className='address__icon'/>
          <div className='address__social-text'>
            <span className='address__social-title'>{skype.title}</span>
            <a className='address__social-link' href={`skype:${skype.link}`}>{skype.link}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressComponent