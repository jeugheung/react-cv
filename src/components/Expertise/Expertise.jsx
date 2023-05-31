import React from 'react';
import './Expertise.scss'
import Title from '../Title/Title';

const Expertise = ({ data, title }) => {
  return (
    <section className="expertise">
      <Title title={title}></Title>
      {data.map((item, index) => (
        <article className="experience" key={index}>
          <div className="experience__date">
            <h3 className="experience__company">{item.info.company}</h3>
            <span className="experience__date">{item.date}</span>
          </div>
          <div className="experience__jobs">
            <h3 className="experience__job">{item.info.job}</h3>
            <p className="experience__description">{item.info.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
};


export default Expertise;
