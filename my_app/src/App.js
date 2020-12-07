import React, {useState, useEffect} from "react";

// useState, useContext, useEffect... sao os hooks 
// Nesse exemplo vai usar coisas mais dinamicas

export default function App() 
{
  const [repositories, setRepositories] = useState([]); 

  // useEffect recebe dois parametros: funcao que sera executada, circunstancia em que
  // a funcao enviada deve ser executada. a circunstancia eh uma lista de uma ou  mais variaveis
  // efeito vai ser executado quando uma das variaveis mudar, posso mandar quantas variaveis eu quiser

  // async eh usado para poder utilizar await
  useEffect(() => { async function fetchData(){
    const response = await App.getData('https://api.github.com/users/lienko/repos');
    const data = await response.json();
    setRepositories(data);
    }
    // const response = await fetch();
  }, []);
  // nao preencher o array de circustancia porque a funcao definida precisa rodar apenas uma vez
  // como useEffect nao tem dependencia, ele nao vai executar novamente , independente de variaveis mudarem ou nao
  
  // posso ter inumeros useEffects na pagina
 
  return (
      <ul>
        {
          repositories.map(repo => (
            <li key={repo.id}> {repo.name} </li>
          ))
        }
      </ul>
  );
}