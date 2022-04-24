
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AddService from './Components/AddService/AddService';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add' element={<AddService></AddService>}></Route>

      </Routes>
    </div>
  );
}

export default App;
