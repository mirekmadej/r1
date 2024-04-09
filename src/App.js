import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Strona1 from './pages/Strona1';
import Strona2 from './pages/Strona2';
import Nawigacja from './pages/Nawigacja';

let Uczniowie = [
  {nr:1, imie:"Ala", nazwisko:"Kot", klasa:"4m"},
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nawigacja />} >
          <Route index element={<Home />} />
          <Route path="strona1" element={<Strona1 />} />
          <Route path='strona2' element={<Strona2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
