import React from 'react';
import './Home.page.scss'
import PhotoBox from '../../components/PhotoBox/PhotoBox';
import home_avatar from '../../assets/images/home-avatar.png';
import Button from '../../components/Button/Button';

const HomePage = () => {

  const user = {
    type: 1,
    name: "John Doe",
    title: "Programmer. Creative. Innovator",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
    avatar: home_avatar
  };

  const first_Button = {
    text: "Know more",
    url: "/main",
    type: "button-home"
  }

  return (
    <section className="home-page" data-testid="home-page">
      <div className='home-page__container'>
        <PhotoBox {...user} />
        <Button {...first_Button} />
      </div>
    </section>
  );
};

export default HomePage;