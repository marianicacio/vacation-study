// import logo from './logo.svg';
// import Saldacao from './saldacao'
// import Saudacao2 from './saudacao2';
import Titulo from './titulo';
import Usuario from './usuario';
import Produto from './produto';
import { useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0)
      return (
          <div>
          <p>Você clicou {contador} vezes</p>
          <button onClick={() => setContador(contador + 1) }>Clique aqui</button>
          </div>
      )
}

export default App;
