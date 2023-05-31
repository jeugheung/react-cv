import React from 'react';
import './Education.scss'
import Timeline from '../TimeLine/TimeLine';
import Title from '../Title/Title';

const Education = ({ timeLine, title }) => {
  return (
    <section className="education">
      <Title title={title}></Title>
      <Timeline/>
    </section>
  );
};

export default Education;