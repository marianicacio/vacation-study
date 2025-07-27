// import logo from './logo.svg';
// import Saldacao from './saldacao'
// import Saudacao2 from './saudacao2';
// import Titulo from './titulo';
// import Usuario from './usuario';
// import Produto from './produto';
import { useEffect, useState } from 'react';
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
    // const [nome, setNome] = useState('')
    // const [email, setEmail] = useState('')

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     alert(`Nome: ${nome}\nEmail: ${email}`)
    // }

    // return (
    //     <div>
    // <h1>formulario</h1>
    //     <form onSubmit={handleSubmit}>
    //         <input type="text" placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} />
    //           <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
    //           <button type='submit'>Enviar</button>
    //     </form>
    //     </div>
    // )
    const [tarefa, setTarefa] = useState('')
    const [lista, setLista] = useState([])

    useEffect(() => {
        const tarefasSalvas = localStorage.getItem('tarefas')
        if (tarefasSalvas) {
            setLista(JSON.parse(tarefasSalvas))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(lista))
    }, [lista])

    function adicionarTarefa(e) {
        e.preventDefault()
        if (tarefa.trim() === '') return
        const novaTarefa = {
            id: Date.now(),
            texto: tarefa,
        }

        setLista([...lista, novaTarefa])
        setTarefa('')
    }

    function removerTarefa(id) {
        const novaLista = lista.filter((item) => item.id !== id)
        setLista(novaLista)
    }

    return (
        <div>
            <form onSubmit={adicionarTarefa}>
                <input type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)} placeholder='Digite uma tarefa' />
                <button type='submit'>Adicionar</button>
            </form>
            <ul>
                {lista.map((item) => (
                    <li key={item.id}>{item.texto}
                        <button onClick={() => removerTarefa(item.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}



export default App;