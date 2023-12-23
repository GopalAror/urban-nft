import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Slidar from './components/Slidar';
import Rout from './components/Rout';
import Third from './components/Third';
import Second from './components/Second';
import Firstmap from './components/Firstmap';
import Forth from './components/Forth';


function App() {
  return (
    <div>
      <div className=' flex overflow-x-hidden'>
        <Slidar />
        <div className='w-full'>
            <Nav />
      <Routes>
        <Route path='/home' element={<Rout/>}/>
        <Route path='/' element={<Rout/>}/>
        <Route path='/market' element={<Firstmap/>}/>
        <Route path='/market' element={<Firstmap/>}/>
        <Route path='/trending' element={<Second/>}/>
        <Route path='/insight' element={<Third/>}/>
        <Route path='/history' element={<Forth/>}/>
      </Routes>
            
        </div>
      </div>
    </div>
  );
}

export default App;
