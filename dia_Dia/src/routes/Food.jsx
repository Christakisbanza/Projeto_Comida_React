import { useEffect, useState } from 'react'

import { useContext } from 'react'
import { MyContext } from '../context/MyContext'

import fetchApi from '../axios/mealDBApi'

import {useNavigate} from 'react-router-dom'

import './Food.css'






const Food = () => {
    const naviagte = useNavigate()

    const {state, dispatch} = useContext(MyContext)
    
    const [foods, setFood] = useState()
    
    
    const getFood = async() => {
        try {
            
            const res = await fetchApi.get(`/search.php?s=${state.categoryChosed}`)
            
            const data = res.data.meals
            
            setFood(data)

        } catch (error) {
            console.log(`Deu Um Erro : ${error}`)
        }
    }


    useEffect(() => {
        getFood()
    }, [state])


    
    const ingredientPage = (category, area, id) => {

        const filtrarIngrediente = foods.filter((item) => item.idMeal == id)
        
        dispatch({type : 'Ingrediente', payload : filtrarIngrediente})

        naviagte(`/${area}/${category}`)
    }


    console.log(foods)
    return (
        <div className='food'>
            {foods ? foods.map((food) => (
                <div key={food.idMeal} className='food-container' onClick={() => ingredientPage(food.strCategory, food.strArea, food.idMeal)}>
                    <img src={food.strMealThumb} alt="food" />
                    <div id='food-descricao'>
                        <p>Origem: {food.strArea}</p>
                        <p>Categoria: {food.strCategory}</p>
                    </div>
                </div>
            )): <p>Carregando...</p>}
        </div>
    )
}

export default Food