import React from 'react';
import './Feedback.scss'
import Title from '../Title/Title';
import Info from '../Info/Info';

const Feedback = ({ data, title }) => {
  return (
    <section className="feedback">
      <Title title={title}></Title>
      {data.map((item, index) => (
        <div className="feedback__item" key={index}>
          <Info text={item.feedback}/>
          <div className="reporter">
            <img src={item.reporter.photoUrl} alt="Reporter" className="reporter__photo" />
            <p className='reporter__text'>{item.reporter.name}, 
              <a href={item.reporter.citeUrl}
                 className="reporter__cite" 
                 target="_blank" 
                 rel="noopener noreferrer"
              >somesite.com</a>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Feedback;
