import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import Login from './Login';
import Back from './Back';


function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
       <Route path ="/" element ={<Login/>}/>
       <Route path ="/web" element ={<Back/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


