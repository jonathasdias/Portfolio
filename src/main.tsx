import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Curriculum from './pages/Curriculum';
import About from './pages/About';
import Projects from './pages/Projects';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {path: '/', element: <About/>},
    {path: '/projects', element: <Projects/>},
    {path: '/curriculo', element: <Curriculum/>},
  ]
}])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
