import React from 'react';
import './cards.scss';
import CardItem from './carditem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our ongoing events</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              title = "New event"
              src='./images/default.jpg'
              text='Internationa Yoga festival by AAcharya Swati Jha'
              time='16/7/2021'
              path='/services'
            />
            <CardItem
              title = "New event"
              src='./images/default.jpg'
              text='Description for the events.'
              time='16/7/2021'
              path='/services'
            />
            <CardItem
              title = "New event"
              src='./images/default.jpg'
              text='Description for the events.'
              time='16/7/2021'
              path='/services'
            />
            <CardItem
              title = "New event"
              src='./images/default.jpg'
              text='Description for the events.'
              time='16/7/2021'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;