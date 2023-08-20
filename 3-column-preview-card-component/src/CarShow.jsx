function CarShow({ data }) {
  const bgColor = {
    'bright-orange': `bg-bright-orange hover:bg-bright-orange`,
    'dark-cyan': 'bg-dark-cyan hover:bg-dark-cyan',
    'very-dark-cyan': 'bg-very-dark-cyan hover:bg-very-dark-cyan',
  };
  const textColor = {
    'bright-orange': 'text-bright-orange',
    'dark-cyan': 'text-dark-cyan',
    'very-dark-cyan': 'text-very-dark-cyan',
  };
  return (
    <>
      <article className={`${bgColor[data.color]} flex flex-col gap-6 p-11`}>
        <div className='flex flex-col gap-6 md:h-[290px]'>
          <img className='self-start' src={data.img} alt={data.title} />
          <h1 className='font-ff-big-shoulders text-4xl font-fw-700 uppercase text-very-light-gray'>
            {data.title}
          </h1>
          <p className='text-transparent-white'>{data.description}</p>
        </div>
        <a
          className={`${
            textColor[data.color]
          } self-start rounded-3xl bg-very-light-gray px-7 py-3 hover:border-solid hover:border-very-light-gray hover:text-transparent-white hover:${
            bgColor[data.color]
          } border-2 border-transparent hover:transition`}
          href='/'
        >
          Learn More
        </a>
      </article>
    </>
  );
}

export default CarShow;
