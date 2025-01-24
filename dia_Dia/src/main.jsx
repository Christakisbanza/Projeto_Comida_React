import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//Importando o Contexto
import { MyContextProvider } from './context/MyContext.jsx'

//importando as rotas
import CriarLogin from './routes/CriarLogin.jsx'
import Login from './routes/Login.jsx'
import Home from './routes/Home.jsx'
import Food from './routes/Food.jsx'
import Ingredients from './routes/Ingredients.jsx'

//Criando router
import {createBrowserRouter, RouterProvider} from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        path: '/',
        element : <CriarLogin /> 
      },
      {
        path : '/Login',
        element : <Login />
      },
      {
        path: '/Home',
        element : <Home />
      },
      {
        path : '/Food/:category',
        element : <Food />
      },
      {
        path: '/:category/:origem',
        element : <Ingredients />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyContextProvider>
      <RouterProvider router={router} />
    </MyContextProvider>
  </StrictMode>,
)
