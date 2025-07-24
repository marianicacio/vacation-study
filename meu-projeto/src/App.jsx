// import logo from './logo.svg';
// import Saldacao from './saldacao'
// import Saudacao2 from './saudacao2';
// import Titulo from './titulo';
// import Usuario from './usuario';
// import Produto from './produto';
import { useState } from 'react';
import './App.css';

function App() {
//   const [contador, setContador] = useState(0)
//       return (
//           <div>
//           <p>Você clicou {contador} vezes</p>
//           <button onClick={() => setContador(contador + 1) }>Clique aqui</button>
//           </div>
//       )
 
    // const [nome, setNome] = useState("")
    // const [email, setEmail] = useState("")

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     console.log("Nome: ", nome)
    //     console.log("Email: ", email)
    // }

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <input type="text" placeholder='nome' onChange={(e) => setNome(e.target.value)}/>
    //         <input type="text" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}/>
    //         <button type='submit'>Eviar</button>
    //     </form>
    // )
    // const frutas = ['maca', 'pera', 'morango', 'banana']

    //     return (
    //         <ul>
    //             {frutas.map((frutas, index) => (
    //                 <li key={index}>{frutas}</li>
    //             ))}
    //         </ul>
    //     )
        const [nome, setNome] = useState('')
        const [email, setEmail] = useState('')

        function handleSubmit(e) {
            e.preventDefault()
        }
    }



export default App;