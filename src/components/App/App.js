import './App.scss';
import Container from '../Container/Container';
import Caption from '../Caption/Caption';
import Cards from '../Cards/Cards';
import Card from '../Cards/Card/Card';
import React from 'react';

function App() {
  return (
    <div className="app">
      <Container>
        <Caption>Ты сегодня покормил кота?</Caption>
        <Cards>
          <Card
            title="Нямушка"
            description="Сказочное заморское яство"
            subtitle="с фуа-гра"
            features={[
              {number: 10, caption: 'порций'},
              {caption: 'мышь в подарок'}
            ]}
            mass={0.5}
            ctaLink="#"
            selected={true}
            selectedText="Печень утки разварная с артишоками"
          />
          <Card
            title="Нямушка"
            description="Сказочное заморское яство"
            subtitle="с рыбой"
            features={[
              {number: 40, caption: 'порций'},
              {number: 2, caption: 'мыши в подарок'}
            ]}
            mass={0.5}
            link="#"
            disabled={true}
            disabledText="Печалька, с рыбой закончился"
          />
          <Card
            title="Нямушка"
            description="Сказочное заморское яство"
            subtitle="с курой"
            features={[
              {number: 100, caption: 'порций'},
              {number: 5, caption: 'мышей в подарок'},
              {caption: 'заказчик доволен'}
            ]}
            mass={0.5}
            link="#"
          />
        </Cards>
      </Container>
    </div>
  );
}

export default App;
