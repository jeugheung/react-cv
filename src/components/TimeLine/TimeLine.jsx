// import React from 'react';
import './TimeLine.scss';
import left_arrow from '../../assets/images/vector1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEducation } from '../../services/education';


const Timeline = () => {

  const dispatch = useDispatch();
  const data = useSelector(state => state.education.educations)
  const isLoading = useSelector(state => state.education.isLoading)

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchEducation())
    }

  }, [dispatch, data.length])

  return (
    <div className="timeline">
      {isLoading ? (
        <div className='loading-container'>
          <FontAwesomeIcon className="icon" icon={faSyncAlt} spin />
        </div>
      ) : (
        data.length === 0 ? (
          <p className='error-message'>Something went wrong; please review your server connection!</p>
        ) : (
          data.map((items, index) => (
            <article className='timeline__container' key={index}>
              <div className='timeline__dates'>
                <time className='timeline__dates-values'>{items.date}</time>
              </div>
              <div className='timeline__text-block'>
                <img className='timeline__left-arrow' src={left_arrow} alt='' />
                <div className='timeline__text-box'>
                  <h2 className='timeline__description-title'>{items.title}</h2>
                  <p className='timeline__description'>{items.description}</p>
                </div>
              </div>
            </article>
          ))
        )
      )}
    </div>
  );
  
};

export default Timeline;
