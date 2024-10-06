const CountryCard = () => {
  return (
    <a className='country-card' href='/'>
      <img src='/' alt='alt name' />
      <div className='card-text'>
        <h3 className='card-title'>Country Name</h3>
        <p>
          <b>Population: </b>
          1000
        </p>
        <p>
          <b>Region: </b>
          West
        </p>
        <p>
          <b>Capital: </b>
          capital
        </p>
      </div>
    </a>
  );
};

export default CountryCard;
