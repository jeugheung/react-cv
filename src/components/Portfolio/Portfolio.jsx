import React from "react";
import './Portfolio.scss'
import IsotopeReact from "../Isotop/Isotop";
import Title from "../Title/Title";
import code from '../../assets/images/card_3.png'
import ui from '../../assets/images/card_1.png'

const Portfolio = ({title}) => {

  const data = [
    {
      type: 'ui',
      title: 'Some Text',
      description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
      link: 'www.google.com',
      image: ui
    },
    {
      type: 'code',
      title: 'Some Text',
      description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
      link: 'www.google.com',
      image: code
    },
    {
      type: 'ui',
      title: 'Some Text',
      description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
      link: 'www.google.com',
      image: ui
    },
    {
      type: 'code',
      title: 'Some Text',
      description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
      link: 'www.google.com',
      image: code
    },
  ];

  return (
    <section className="portfolio">
      <Title title={title}></Title>
      <IsotopeReact data={data}/>
    </section>
  )
}

export default Portfolio