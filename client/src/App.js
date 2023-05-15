import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Main from './components/Main';
import ShowOne from './components/ShowOne';
import Update from './components/Update';

function App() {

  // state var for the db stuff
  const [products, setProducts] = useState([])

  return (
    <fieldset>
      <div className="App">
        {/* heroes = {JSON.stringify(heroes)} */}
        {/* <Form/> */}

        {/* =========== SETUP THEATER STAGE ============ */}
        <Routes>

          {/* SHOW ALL and CREATE */}
          <Route path='/' element={
            <Main products={products} setProducts={setProducts} />
          } />

          {/* EDIT */}
          <Route path='/products/:id/edit' element={<Update/>} />

          {/* READ ONE */}
          <Route path='/products/:id' element={<ShowOne/>} />


        </Routes>


      </div>
    </fieldset>
  );
}

export default App;
