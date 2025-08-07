import React, { useEffect, useState } from 'react';
import "./style.css";
// import logoSmall from "../../../src/assets/images/logo-small.svg";
import logo from "../../assets/images/logo.png"



export default function Agenda() {
    const [tarefa, setTarefa] = useState(''); // Hooks dentro do componente
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const tarefasSalvas = localStorage.getItem('tarefas');
        if (tarefasSalvas) {
            setLista(JSON.parse(tarefasSalvas));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(lista));
    }, [lista]);

    function adicionarTarefa(e) {
        e.preventDefault();
        if (tarefa.trim() === '') return;
        const novaTarefa = {
            id: Date.now(),
            texto: tarefa,
        };

        setLista([...lista, novaTarefa]);
        setTarefa('');
    }

    function removerTarefa(id) {
        const novaLista = lista.filter((item) => item.id !== id);
        setLista(novaLista);
    }

    return (
        <div>
            <main>
                <section>
                    <form onSubmit={adicionarTarefa}>
                        <input
                            type="text"
                            value={tarefa}
                            onChange={(e) => setTarefa(e.target.value)}
                            placeholder="Digite uma tarefa"
                        />
                        <button type="submit">Adicionar</button>
                    </form>
                </section>
                <ul>
                    {lista.map((item) => (
                        <li key={item.id}>
                            {item.texto}
                            <button onClick={() => removerTarefa(item.id)}>❌</button>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}
