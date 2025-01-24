import { MyContext } from '../context/MyContext'
import { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import './CriarLogin.css'





const CriarLogin = () => {

    const {state, dispatch} = useContext(MyContext)

    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [dataNasc, setDataNasc] = useState()
    const [profissao, setProfissao] = useState()
    const [senha, setSenha] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!nome || !email || !dataNasc || !profissao || !senha) return

        dispatch({type: 'SaveDados', payload: {nome, email, dataNasc, profissao, senha}})

        alert('Cadastro efetuado com sucesso')

        navigate('/Login')
    }
    
    return (
        <div id='criarLogin-container'>
            <div id='form-container-criar'>
                <form id='form-criar' onSubmit={(e) => handleSubmit(e)}>
                    <label>
                        <h2>Cadastre-se</h2>
                        <span>Nome: </span>
                        <input
                        type="text"
                        id="nome"
                        placeholder='Digite seu nome'
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}/>
                    </label>
                    <label>
                        <span>Data de Nascimento: </span>
                        <input
                        type="date"
                        id='data'
                        required
                        value={dataNasc}
                        onChange={(e) => setDataNasc(e.target.value)}/>
                    </label>
                    <label>
                        <span>Profissão: </span>
                        <input
                        type="text"
                        id="job"
                        placeholder='Área de atuação'
                        required
                        value={profissao}
                        onChange={(e) => setProfissao(e.target.value)}/>
                    </label>
                    <label>
                        <span>E-mail: </span>
                        <input
                        type="email"
                        id='email'
                        placeholder='Digite seu e-mail'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        <span>Senha: </span>
                        <input
                        type="password"
                        id="senha"
                        placeholder='Crie uma senha'
                        required
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}/>
                    </label>
                    <input type="submit" value="Cadastrar" />
                </form>
            </div>
        </div>
    )
}

export default CriarLogin