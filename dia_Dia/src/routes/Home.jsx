import fetchApi from '../axios/mealDBApi'

import Search from '../components/Search'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useContext } from 'react'
import { MyContext } from '../context/MyContext'

import './Home.css'




const Home = () => {

    const navigate = useNavigate()

    const {state, dispatch} = useContext(MyContext)

    const [receitas, setReceitas] = useState()


    const getReceitas = async() => {
        try {
            const response = await fetchApi.get(`/categories.php`)

            const data = response.data.categories
            
            setReceitas(data)
            
            
        } catch (error) {
            console.log(`Deu ERRO : ${error}`)
        }
    }


    useEffect(() => {
        getReceitas()
    },[])

    useEffect(() => {
        dispatch({type: 'DadosCat', payload : receitas})
    },[receitas])


    const chosedCategory = (Category) => {
        dispatch({type: 'Category', payload: Category})

        navigate(`/Food/${Category}`)
    }    





    return (
        <div className='home'>
            <h1>Escolha uma categoria</h1>
            <Search receitas={receitas}/>
            <div id='home-container'>
                {state.Search ? state.Search.map((receita) => (
                    <div key={receita.idCategory} className='category' onClick={() => chosedCategory(receita.strCategory)} >
                        <h2>{receita.strCategory}</h2>
                        <p>{receita.strCategoryDescription}</p>
                        <img src={receita.strCategoryThumb} alt="food" />
                
                    </div>
                )) : <p>Carregando...</p> }
            </div>
        </div>
    )
}

export default Home