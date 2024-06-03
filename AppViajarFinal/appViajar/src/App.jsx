
import './App.css'
import { Navigation } from './componentes/Nav';
import {Outlet} from 'react-router-dom';

export function App() {
  
  return (
    <>
      
      <Navigation></Navigation>
      <div>
        <Outlet></Outlet>
      </div>
      
    </>
  )
}

