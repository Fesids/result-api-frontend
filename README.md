# result-api-frontend

<h2>Frontend</h2>

<ul>
  <li>Acesse o caminho ./frontend/core</li>
  <li>Instale as dependências necessárias</li>
  <li>Rode o comando "npm run build"</li>
  <li>Por fim, rode o comando "npm run preview". Após isso o frontend estará rodando na porta 5001</li>
  </br>
  <p>**** rode o comando "npm run dev" para rodar os arquivos sem necessidade de realizar uma build</p>

</ul>
  <p>Para criar um "Resultado", aperte o botão amarelo "Lançar nota" localizado na parte superior direita de cada seção.</p></br>
  <p>Após isso, clique em cima de um dos ícones que contém um dos nomes das matérias disponíveis. O ícone ficará destacado em branco. Insira uma nota e aperte em confirmar</p></br>
  <p>Clique no ícone de lixeira para excluir os resultados já adicionados</p></br>

</br>
</br>


<h2>Backend</h2>

<ul>
  <li>Acesse o caminho ./backend/Resultado</li>
  <li>Instale as dependências necessárias</li>
  <li>Rode o comando "npm run start:dev"</li>

  
</ul>

<h3>Endpoints: </h3>
</br>
<p>para retornar uma lista de entidades já cadastradas, envie uma requisição com o método "GET" para a rota "http://localhost:5002/api/v1/results"</p></br>
<p>para deletar uma entidade já cadastrada, envie uma requisição com o método "DELETE" para a rota "http://localhost:5002/api/v1/results/<ID>"</p>
<p>para criar uma entidade, envie uma requisição com o método "POST" para a rota "http://localhost:5002/api/v1/results" com um body similar à :</p>
<p>
  {
    "disciplina": "Filosofia",
    "bimestre" : 1,
    "nota": 5
}
</p>


