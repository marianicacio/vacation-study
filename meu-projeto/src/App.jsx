// import logo from './logo.svg';
// import Saldacao from './saldacao'
// import Saudacao2 from './saudacao2';
import Titulo from './titulo';
import Usuario from './usuario';
import Produto from './produto';
import './App.css';

function App() {
  return (
    <div>
      <Titulo mensagem="suave"/>,
      <Usuario nome="Maria" idade="17"/>,
      <Produto nome="Corretivo Fran" preco="49,99"/>
    </div>
  );
}

export default App;
