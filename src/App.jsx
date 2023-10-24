import Home from './layouts/home'
import About from './layouts/about'
import Signin from './layouts/signin'
import Navigation from './layouts/navigation'
import { Route, 
         RouterProvider, 
         createBrowserRouter, 
         createRoutesFromElements } from 'react-router-dom'
import './App.scss'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="sign-in" element={<Signin />} />
    </Route>
  )
)



function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
