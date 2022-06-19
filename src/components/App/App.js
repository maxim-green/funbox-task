import './App.scss';
import Container from '../Container/Container';
import Caption from '../Caption/Caption';
import Cards from '../Cards/Cards';
import Card from '../Cards/Card/Card';
import React, {useState} from 'react';

function App() {
  const initialFoods = [
    {
      id: 'food1',
      title: 'Нямушка',
      description: 'Сказочное заморское яство',
      subtitle: 'с фуа-гра',
      features: [
        {number: 10, caption: 'порций'},
        {caption: 'мышь в подарок'}
      ],
      weight: 0.5,
      detailText: 'Печень утки разварная с артишоками',
      quantity: 10,
      soldOutText: 'Печалька, с фуа-гра закончился'
    },
    {
      id: 'food2',
      title: 'Нямушка',
      description: 'Сказочное заморское яство',
      subtitle: 'с рыбой',
      features: [
        {number: 40, caption: 'порций'},
        {number: 2, caption: 'мыши в подарок'}
      ],
      weight: 2,
      detailText: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      quantity: 3,
      soldOutText: 'Печалька, с рыбой закончился'
    },
    {
      id: 'food3',
      title: 'Нямушка',
      description: 'Сказочное заморское яство',
      subtitle: 'с курой',
      features: [
        {number: 100, caption: 'порций'},
        {number: 5, caption: 'мышей в подарок'},
        {caption: 'заказчик доволен'}
      ],
      weight: 5,
      detailText: 'Филе из цыплят с трюфелями в бульоне',
      quantity: 0,
      soldOutText: 'Печалька, с курой закончился'
    }
  ]
  const [foods, setFoods] = useState(initialFoods)
  const [selectedFoods, setSelectedFoods] = useState([])

  const toggleSelect = (id) => {
    if (selectedFoods.includes(id) || !(foods.find(food => food.id === id).quantity > 0)) {
      setSelectedFoods(prev => prev.filter(foodId => foodId !== id))
    } else {
      setSelectedFoods(prev => [...prev, id])
    }
  }

  return (
    <div className="app">
      <Container>
        <Caption>Ты сегодня покормил кота?</Caption>
        <Cards>
          {foods.map(food => <Card
            key={food.id}
            id={food.id}
            title={food.title}
            description={food.description}
            subtitle={food.subtitle}
            features={food.features}
            weight={food.weight}
            selected={selectedFoods.includes(food.id)}
            selectedText={food.detailText}
            disabled={!(food.quantity > 0)}
            disabledText={food.soldOutText}
            onClick={toggleSelect}
          />)}
        </Cards>
      </Container>
    </div>
  );
}

export default App;
