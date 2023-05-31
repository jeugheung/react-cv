import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import './Isotop.scss'

const IsotopeReact = ({data}) => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState('*');

  useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    });

    return () => {
      isotope.current.destroy();
    };
  }, []);

  useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <ul className='buttons__filter'>
        <li className={filterKey === '*' ? 'active' : ''} onClick={handleFilterKeyChange('*')}>All</li>
        <span>/</span>
        <li className={filterKey === 'ui' ? 'active' : ''} onClick={handleFilterKeyChange('ui')}>Ui</li>
        <span>/</span>
        <li className={filterKey === 'code' ? 'active' : ''} onClick={handleFilterKeyChange('code')}>Code</li>
      </ul>


      <div className="filter-container">
        {data.map((item, index) => (
          <div className={`filter-item ${item.type}`} key={index}>
            <img src={item.image} alt='e' />
            <div className="overlay">
              <span className='overlay__title'>{item.title}</span>
              <span className='overlay__description'>{item.description}</span>
              <a className='overlay__link' href={item.link}>View resource</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IsotopeReact;
