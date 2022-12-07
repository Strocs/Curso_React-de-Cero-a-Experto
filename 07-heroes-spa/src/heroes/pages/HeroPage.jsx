import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers'

export const HeroPage = () => {
  const { id } = useParams()
  const hero = useMemo(() => getHeroById(id), [id])
  const navigate = useNavigate()
  const onNavigateBack = () => {
    navigate(-1)
  }
  if (!hero) {
    return <Navigate to='/marvel' />
  }
  const { superhero, publisher, alter_ego, first_appearance, characters } = hero
  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          className='img-thumbnail animate__animated animate__fadeInLeft'
          src={`/assets/${id}.jpg`}
          alt={superhero}
        />
      </div>

      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter Ego: </b>
            {alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className='list-group-item'>
            <b>First Appearance: </b>
            {first_appearance}
          </li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{characters}</p>

        <button onClick={onNavigateBack} className='btn btn-outline-primary'>
          Back
        </button>
      </div>
    </div>
  )
}
