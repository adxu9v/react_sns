import react,{useState} from 'react'
import Header from './components/Header'
import Container from './components/Container';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Write from './components/Text'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path='/' element={ <Container></Container>}></Route>
        <Route path='/write' element={<Write></Write>}></Route>
        <Route path='*' element={<div>page: 404</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;

