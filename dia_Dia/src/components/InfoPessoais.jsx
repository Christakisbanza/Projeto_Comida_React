import { useContext } from 'react'
import { MyContext } from '../context/MyContext'

import { useState } from 'react'
import { useEffect } from 'react'

import './InfoPessoais.css'
import imgMenu from '../img/menu.png'
import imgSairMenu from '../img/x.png'

const InfoPessoais = () => {

    const {state, dispatch} = useContext(MyContext)

    const [hideDataMenu, setHideDataMenu] = useState('hide')
    const [showDataMenu, setShowDataMenu] = useState('show')

    const showData = () => {
        setHideDataMenu('show')
        setShowDataMenu('hide')
        
        dispatch({type: 'ToggleMenu', payload: {hideDataMenu, showDataMenu}})
    }

    const hideData = () => {
        setHideDataMenu('hide')
        setShowDataMenu('show')

        dispatch({type: 'ToggleMenu', payload: {hideDataMenu, showDataMenu}})
    }

    

    console.log(state)

    return (
        <div id='menu'>
            <div id='menu-img' className={showDataMenu} onClick={() => showData()}>
                <img src={imgMenu} alt="menu" />
            </div>
            <div id='menu-container' className={hideDataMenu}>
                <div id='img-sairMenu'>
                    <img src={imgSairMenu} alt="x" onClick={() => hideData()} />
                </div>
                <h1>Dados Pessoais</h1>
                <h3>Nome: {state.nome}</h3>
                <h3>Data de Nascimento: {state.dataNascimento}</h3>
                <h3>Profissão: {state.profissao}</h3>
                <h3>Email: {state.email}</h3>
                <h3>Senha: {state.senha}</h3>
            </div>
        </div>
    )
}

export default InfoPessoais