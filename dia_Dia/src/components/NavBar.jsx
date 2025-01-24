import InfoPessoais from './InfoPessoais'

import {useNavigate} from 'react-router-dom'

import { useLocation } from 'react-router-dom'

import './NavBar.css'




const NavBar = () => {

    const localAtual = useLocation()

    const navegar = useNavigate()

    //Navegação
    const changePage = () => {
        navegar('/Login')
    }
    const changePage2 = () => {
        navegar('/Home')
    }

    // Criei um objeto de estilos
    const estiloLogin = {
        background: ' #1E2019',
        color: '#fff',
        borderBottom: "2px solid #fff"
    }
    
    return (
        <div id='navBar' style={localAtual.pathname == '/' ? {background: '#ccc'} : estiloLogin }>
            <h2 onClick={changePage2}>Receitas do Dia a Dia</h2>
            <p>
                Aqui você vai poder descobrir as melhores receitas do mundo 
            </p>
            {localAtual.pathname == '/' && <button onClick={changePage}>Login</button>}
            {localAtual.pathname == '/Login' && <button onClick={changePage2}>Entrar sem Login</button>}
            {localAtual.pathname !== '/' && localAtual.pathname !== '/Login' && <InfoPessoais />}
            
        </div>
    )
}

export default NavBar