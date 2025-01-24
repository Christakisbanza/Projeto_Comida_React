import { createContext } from "react";
import { useReducer} from "react";



const inicialState = {
    nome: '',
    dataNascimento: '',
    profissao: '',
    email: '',
    senha: '',
    categoryChosed: '',
    showIngredients : [],
    showMenu : '',
    hideMenu : ''
}

const myReducer = (state, action) => {

    switch(action.type){
        case 'SaveDados':
            return {
                ...state,
                nome : action.payload.nome,
                dataNascimento : action.payload.dataNasc,
                email : action.payload.email,
                profissao : action.payload.profissao,
                senha : action.payload.senha,
            }
        case 'Category':
            return{
                ...state,
                categoryChosed: action.payload
            }
        case 'DadosCat':
            
            return{
                ...state,
                Search: action.payload
            }
        case 'Search':
            return{
                ...state,
                Search : action.payload
            }
        case 'Ingrediente':
            return{
                ...state,
                showIngredients: action.payload
            }
        case 'ToggleMenu':

            return{
                ...state,
                showMenu : action.payload.showDataMenu,
                hideMenu : action.payload.hideDataMenu
            }
        default:
            return state
    }
}


export const MyContext = createContext()

export const MyContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(myReducer, inicialState)

    return(
        <MyContext.Provider value={{state, dispatch}}>
            {children}
        </MyContext.Provider>
    )
}