import { useEffect, useState } from "react";
import '../node_modules/primeflex/primeflex.css';

export function EntryPoint() {

  const [respostaServidor, setRespostaServidor] = useState('');

  /*
  const retornarValor = async () => {
    const request = await fetch('http://localhost:8081', { method: 'GET'});
    const response = await request.json();
    setRespostaServidor(response.content);
  }

  const bodySend = {
    name: 'Matheus'
  }

  const postItens = async () => {
    await fetch('http://localhost:8081', { method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodySend)}
    );
  }

  useEffect(() => {
    console.log('entrou nesse effect');
    retornarValor();
    postItens();
  }, []);

  */

  return (
    <h3>
       Resposta do conteúdo !: {respostaServidor}
    </h3>
    );
}
  