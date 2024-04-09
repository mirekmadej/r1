import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Strona1 from './pages/Strona1';
import Strona2 from './pages/Strona2';
import Nawigacja from './pages/Nawigacja';

let Uczniowie = [
  {nr:1, imie:"Ala", nazwisko:"Kot", klasa:"4m"},
  {nr:2, imie:"Iza", nazwisko:"Lis", klasa:"3s"},
];

function App() {
  function dodaj()
  {
    let nr=document.getElementById("nr").value;
    let imie=document.getElementById("imie").value;
    let nazw=document.getElementById("nazwisko").value;
    let klasa=document.getElementById("klasa").value;
    let u = {nr:nr, imie:imie, nazwisko:nazw, klasa:klasa};
    console.log(u);
    Uczniowie.push(u);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nawigacja />} >
          <Route index element={<Home t={Uczniowie}/>} />
          <Route path="strona1" element={<Strona1 />} />
          <Route path='strona2' element={<Strona2 f={()=>dodaj()}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
