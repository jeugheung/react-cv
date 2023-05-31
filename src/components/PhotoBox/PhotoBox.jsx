import React from 'react';
import './PhotoBox.scss'

const PhotoBox = ({ type, name, title, description, avatar }) => {
  if (type === 1) {
    return (
      <section className="photo-box">
        <img className='photo-box__avatar' src={avatar} alt="User Avatar" />
        <h2 className='photo-box__name'>{name}</h2>
        <h3 className='photo-box__title'>{title}</h3>
        <p className='photo-box__description'>{description}</p>
      </section>
    );
  } else if (type === 2) {
    return (
      <section className="simple-box">
        <img className='simple-box__avatar' src={avatar} alt="" />
        <h2 className='simple-box__name'>{name}</h2>
      </section>
    );
  }
};

export default PhotoBox;