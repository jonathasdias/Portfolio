import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import About from './pages/About';
import Projects from './pages/Projects';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {path: '/', element: <About/>},
    {path: '/projects', element: <Projects/>},
  ]
}])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
