// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './views/Home/Home.page';
import MainPage from './views/Main/Main.page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/main' element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
