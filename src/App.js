import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Slidar from './components/Slidar';
import Rout from './components/Rout';
import Third from './components/Third';


function App() {
  return (
    <div>
      <div className=' flex overflow-x-hidden'>
        <Slidar />
        <div className='w-full'>
            <Nav />
      <Routes>
        <Route path='/' element={<Rout/>}/>
        <Route path='/home' element={<Third/>}/>
        <Route path='/home' element={<Third/>}/>
        <Route path='/home' element={<Third/>}/>
        <Route path='/home' element={<Third/>}/>
      </Routes>
            
        </div>
      </div>
    </div>
  );
}

export default App;
