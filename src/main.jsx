import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Problems from './components/Problems/Problems.jsx'
import Tutorials from './components/Tutorials.jsx'
import Home from './components/Home/Home.jsx'
import Explore from './components/Explore.jsx'
import Signin from './components/Userloginregirter/Signin.jsx'
import Register from './components/Userloginregirter/Register.jsx'
import Signindone from './components/Userloginregirter/signindone.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='explore/' element={<Explore />} />
      <Route path='problems/' element={<Problems />} />
      <Route path='tutorials/' element={<Tutorials />}/>
      <Route path='signin/' element={<Signin />}/>
      <Route path='register/' element={<Register />}/>
      <Route path='signindone/' element={<Signindone />}/>
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-piq3d6cq6lhqi6vt.us.auth0.com"
    clientId="G3HiMunBP7h5g7V8URjGAm12WZTRtgmH"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
    </Auth0Provider>
)
