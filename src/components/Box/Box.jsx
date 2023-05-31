import React from 'react';
import './Box.scss'
import Title from '../Title/Title';

const Box = ({ title, content }) => {
  return (
    <section className="box">
      <Title title={title}></Title>
      <p className='box__content'>{content}</p>
    </section>
  );
};

export default Box;