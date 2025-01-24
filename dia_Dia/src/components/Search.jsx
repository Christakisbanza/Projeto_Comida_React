import { useContext } from 'react'
import { MyContext } from '../context/MyContext'

import { useState } from 'react'

import './Search.css'

const Search = ({receitas}) => {

    const [semInformacao, setSemInformacao] = useState('')

    const {state, dispatch} = useContext(MyContext)

    const searchFood = (e) => {

        const inputVal = e 
        const valToUpper = inputVal.toUpperCase()

        const searchResult = receitas.filter((category) => {
            return category.strCategory.includes(valToUpper)
        })


        if(searchResult.length == 0){
            setSemInformacao('Nenhum dado encotrado !')
        }else{
            setSemInformacao('')
        }
        
        
        dispatch({type : 'Search', payload: searchResult})
    }

    

    return (
        <div id='search'>
            <label>
                <input 
                type="text" 
                id="pesquisar"
                placeholder='Procure por uma categoria'
                onKeyUp={(e) => searchFood(e.target.value)}/>
            </label>
            {semInformacao}
        </div>
    )
}

export default Search