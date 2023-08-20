import './styles.css';
import iconLuxury from './images/icon-luxury.svg';
import iconSedan from './images/icon-sedans.svg';
import iconSuv from './images/icon-suvs.svg';
import CarShow from './CarShow';

function App() {
  const data = [
    {
      id: 1,
      title: 'Sedans',
      description:
        'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      img: iconSedan,
      color: 'bright-orange',
    },

    {
      id: 2,
      title: 'SUVs',
      description:
        'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      img: iconSuv,
      color: 'dark-cyan',
    },

    {
      id: 3,
      title: 'Luxury',
      description:
        'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      img: iconLuxury,
      color: 'very-dark-cyan',
    },
  ];

  const renderedCars = data.map((car) => {
    return <CarShow key={car.id} data={car} />;
  });

  return (
    <>
      <main className='mx-5 my-6 flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-sm md:max-w-[900px] md:flex-row'>
        {renderedCars}
      </main>
      <footer className='mb-6 text-center'>
        Challenge by <span className='text-bright-orange'>Frontend Mentor</span>
        . Coded by <span className='text-dark-cyan'>Michael Tabilin</span>
      </footer>
    </>
  );
}

export default App;
