import React, {useState, useEffect} from "react";

// useState, useContext, useEffect... sao os hooks 
// Nesse exemplo vai usar coisas mais dinamicas

export default function App() 
{
  const [repositories, setRepositories] = useState([]); 

  // useEffect recebe dois parametros: funcao que sera executada, circunstancia em que
  // a funcao enviada deve ser executada. a circunstancia eh uma lista de uma ou  mais variaveis
  // efeito vai ser executado quando uma das variaveis mudar, posso mandar quantas variaveis eu quiser

  // nao preencher o array de circustancia porque a funcao definida precisa rodar apenas uma vez
  // como useEffect nao tem dependencia, ele nao vai executar novamente , independente de variaveis mudarem ou nao
  
  // posso ter inumeros useEffects na pagina

  // poderia criar um novo estado de favoritos, mas teria que refenciar e duplicar repositorios clicados como favoritos
  // melhor incluir em cada repositorio a propriedade favorito e preencher com true se clicada 

  // async eh usado para poder utilizar await

  useEffect(async () => { 
    const response = await fetch('https://api.github.com/users/lienko/repos');
    const data = await response.json();
    setRepositories(data);
    // const response = await fetch();
  }, []);
 
  // efeito so vai ser disparado quando a propriedade de repositorios mudar
  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `Voce tem ${filtered.length} favoritos`
  },[repositories]);


  function handleFavorit(id) 
  {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite} : repo
    });
    // !repo.favorite -> se true, false, se false, true
    setRepositories(newRepositories);
  }


  return (
      <ul>
        {
          repositories.map(repo => (
            <li key={repo.id}>
               {repo.name} 
               {repo.favorite && <span> (favorito) </span>}
               <button onClick={
                 () => handleFavorit(repo.id)
               }>Favoritar</button>
            </li>
          ))
        }
      </ul>
  );
}