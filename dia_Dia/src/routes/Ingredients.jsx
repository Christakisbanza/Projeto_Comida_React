import { useContext } from 'react'
import { MyContext } from '../context/MyContext'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'



import './Ingredients.css'






const Ingredients = () => {

    const {state, dispatch} = useContext(MyContext)

    const infoIngredient = state.showIngredients[0]

    return (
        <div className='ingredientes'>
            <div id='header'>
                <h1>{infoIngredient.strMeal}</h1>
                <div id='foto-links'>
                    <img src={infoIngredient.strMealThumb} alt="food" />
                </div>
                <div className='header-control'>
                    <p>Origem: {infoIngredient.strArea}</p>
                    <p>Categoria: {infoIngredient.strCategory}</p>
                </div>
                <div className='header-control'>
                    <Link target='_blank' to={infoIngredient.strYoutube}>Youtube</Link>
                    <Link target='_blank' to={infoIngredient.strSource}>Source</Link>
                </div>
            </div>
            <div id='ingredientes-container'>
                <div className='ingredientes-control'>
                    <h2>Ingredientes:</h2>
                    <p>{infoIngredient.strIngredient1}</p>
                    <p>{infoIngredient.strIngredient2}</p>
                    <p>{infoIngredient.strIngredient3}</p>
                    <p>{infoIngredient.strIngredient4}</p>
                    <p>{infoIngredient.strIngredient5}</p>
                    <p>{infoIngredient.strIngredient6}</p>
                    <p>{infoIngredient.strIngredient7}</p>
                    <p>{infoIngredient.strIngredient8}</p>
                    <p>{infoIngredient.strIngredient9}</p>
                    <p>{infoIngredient.strIngredient10}</p>
                    <p>{infoIngredient.strIngredient11}</p>
                    <p>{infoIngredient.strIngredient12}</p>
                    <p>{infoIngredient.strIngredient13}</p>
                    <p>{infoIngredient.strIngredient14}</p>
                </div>
                <div className='ingredientes-control'>
                    <h2>Measure:</h2>
                    <p>{infoIngredient.strMeasure1}</p>
                    <p>{infoIngredient.strMeasure2}</p>
                    <p>{infoIngredient.strMeasure3}</p>
                    <p>{infoIngredient.strMeasure4}</p>
                    <p>{infoIngredient.strMeasure5}</p>
                    <p>{infoIngredient.strMeasure6}</p>
                    <p>{infoIngredient.strMeasure7}</p>
                    <p>{infoIngredient.strMeasure8}</p>
                    <p>{infoIngredient.strMeasure9}</p>
                    <p>{infoIngredient.strMeasure10}</p>
                    <p>{infoIngredient.strMeasure11}</p>
                    <p>{infoIngredient.strMeasure12}</p>
                    <p>{infoIngredient.strMeasure13}</p>
                    <p>{infoIngredient.strMeasure14}</p>
                </div>
            </div>
        </div>
    )
}

export default Ingredients