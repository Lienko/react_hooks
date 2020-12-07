import React, {useState} from "react";

// useState, useContext... sao os hooks 
// ao inves de receber uma classe com jsx (java script x) ele vai receber uma funcao
// e a funcao e os estados se aplicam a funcao

export default function App() 
{

  // useState retorna um repositorio de estados e uma funcao que atualiza o estado
  // useState(aqui vai o estado inicial)

  const [repositories, setRepositories] = useState([
    {id:1, name:'lari'},
    {id:2, name:'deb'},
    {id:3, name:'iwan'}
  ]); 
  
  // Posso criar um funcao dentro da funcao do app (ela vai ficar scopada, so encontra no escopo da funcao App)
  function handleAddRepository()
  {
    setRepositories([
      ...repositories,
      {id: Math.random(), name: "Novo repo"}])
  }

  // return <h1> Hello Lari </h1>;
  return (
    <>
      <ul>
        {
          repositories.map(repo => (
            <li key={repo.id}> {repo.name} </li>
          ))
        }
      </ul>
      <button onClick={handleAddRepository}>
        adicionar repositorio
      </button>
    </>
  );
}