import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

const Menu = ({items}) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const {id,title,img,price,desc} = menuItem;

        return <FadeIn key={id} className='menu-item'>
          <img src={img} alt={title} className='img' />
          <div className='item-info'>
            <header>
              <h4>{title}</h4>
              <h4>£{price}</h4>
            </header>
            <p className='item-text'>{desc}</p>
          </div>
        </FadeIn>
      })}
    </div>
  );
};

export default Menu;