import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/heroes/${id}.jpg`
    return (
        <div className=' animate__animated animate__fadeIn mb-2'>
            <div className="card bg-dark text-white" >
                <div className="row no-gutters">
                    <div className="col " >
                        <img src={heroImageUrl} className='card-img' alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body ">
                            <h5 className='card-title '>{superhero} </h5>
                            <p className="card-text ">{alter_ego}</p>
                            {(alter_ego !== characters) && (<p>{characters}</p>)}
                            <p className="card-text">
                                <small className=''>{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                Ver mas...
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
