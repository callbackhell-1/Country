import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import FilterMenu from './components/FilterMenu.jsx';
import CountryCard from './components/CountryCard.jsx';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className='search-filter-container'>
          <SearchBar />
          <FilterMenu />
          <CountryCard />
        </div>
      </main>
    </>
  );
};

export default App;
