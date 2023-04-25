import React from 'react'
import queryString from 'query-string'
import { HeroCard } from '../components/HeroCard'
import { useForm } from '../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroByName } from '../helpers/getHeroByName';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroByName(q.toLowerCase());

  const { searchText, onInputChange, } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`)
  }
  return (
    <div >
      <h1>Search</h1>
      <hr />

      <div className='row'>
        <div className="col-5">
          <h4>Searching</h4>

          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              className='form-control'
              type="text"
              placeholder='Search a hero'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />

            <button className='btn btn-info text-dark mt-2'>
              Search
            </button>
          </form>
        </div>

        <div className="col-7 ">
          <h4>Result</h4>
          <hr />

          {
            (q === '') 
            ? <div className='alert alert-primary animate__animated animate__fadeInDown'>Search a hero</div>
            :
            (heroes.length === 0) 
            && <div className='alert alert-danger animate__animated animate__fadeInDown'>No hero with <b>{q}</b></div>
          }

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>
    </div>
  )
}
