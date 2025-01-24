import { useContext, useState } from 'react'
import { MyContext } from '../context/MyContext'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import './Login.css'

const Login = () => {
    const navigate = useNavigate()

    const {state, dispatch} = useContext(MyContext)

    const [email, setEmail] = useState()
    const [senha, setSenha] =useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!email || !senha) return

        if(state.email == email && state.senha == senha){
            navigate('/Home')
        }else{
            alert('Informaçoes invalidas')
        }
        setEmail('')
        setSenha('')
    }

    return (
        <div id='login-container'>
            <div id='form-container'>
                <form id='formLogin' onSubmit={(e) => handleSubmit(e)}>
                    <h2>Login</h2>
                    <label>
                        <span>E-mail: </span>
                        <input 
                        type="email" 
                        id='emailLogin'
                        placeholder='Entre com o seu e-mail'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        <span>Senha: </span>
                        <input 
                        type="password" 
                        id="senhaLogin" 
                        placeholder='Digite sua senha'
                        required
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}/>
                    </label>
                    <input type="submit" value="Login" />
                    <div id='criar-conta'>
                        <p>Não tem conta ?</p>
                        <Link to='/'>Cadastre-se</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login