import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';

export const Heropage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //TODO: usando el useMemo
  const hero = useMemo(() => getHeroById(id), [id]);


  const onNavigateBack = () => {
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to="/marvel" />
  };

  const heroImageUrl = `/heroes/${id}.jpg`
  return (

    <div className=' row mt-2 mb-2'>
      <div className="col-4">
        <img src={heroImageUrl} alt={hero.superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className='list-groud lits-grout-flush'>
          <li className='list-groud-item'><b>Alter ego:</b> {hero.alter_ego}</li>
          <li className='list-groud-item'><b>Publisher:</b> {hero.publisher}</li>
          <li className='list-groud-item'><b>First appearance:</b> {hero.first_appearance}</li>
        </ul>

        <h5 className='mt-4'>Characters</h5>
        <p>{hero.characters}</p>

        <button
          onClick={onNavigateBack}
          className='btn btn-outline-primary'>
          Regresar
        </button>
      </div>
    </div>
  )
}
