import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Productpage from './pages/Productpage';
import Productdetail from './pages/Productdetail';
import { Routes,Route } from 'react-router-dom';  
function App() {


  return (
    <>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Productpage/>}/>
      <Route path='/productdetail/:id' element={<Productdetail/>}/>
    </Routes>
   
    

   

    </>
  )
}

export default App
