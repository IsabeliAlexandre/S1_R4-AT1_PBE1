const express = require('express');
const app = express();
const PORT = 8081;

app.get('/soma/:numUm/:numDois', (req, res)=>{
  const { numUm, numDois } = req.params;
  const somaUm = parseFloat(numUm);
  const somaDois = parseFloat(numDois);

  if (isNaN(somaUm) || isNaN(somaDois)) {
    return res.status(400).send('Apenas números válidos');
  }

  const resultado = somaUm+ somaDois;
  res.send(`O resultado da sua soma é ${resultado}`);
});

app.get('/subtracao/:numUm/:numDois', (req, res)=>{
  const { numUm, numDois } = req.params;
  const subtracaoUm = parseFloat(numUm);
  const subtracaoDois = parseFloat(numDois);

  if (isNaN(subtracaoUm) || isNaN(subtracaoDois)){
    return res.status(400).send('Apenas números válidos');
  }

  const resultado = subtracaoUm - subtracaoDois;
  res.send(`O resultado da sua subtração ${resultado}`);
});

app.get('/multiplicacao/:numUm/:numDois', (req, res)=>{
  const { numUm, numDois } = req.params;
  const multiplicacaoUm = parseFloat(numUm);
  const multiplicacaoDois = parseFloat(numDois);

  if (isNaN(multiplicacaoUm) || isNaN(multiplicacaoDois)){
    return res.status(400).send('Apenas números válidos');
  }

  const resultado = multiplicacaoUm * multiplicacaoDois;
  res.send(`Resultado da sua multiplicação é: ${resultado}`);
});

app.get('/divisao/:numUm/:numDois', (req, res)=>{
  const { numUm, numDois } = req.params;
  const divisaoUm= parseFloat(numUm);
  const divisaoDois= parseFloat(numDois);

  if (isNaN(divisaoUm) || isNaN(divisaoDois)){
    return res.status(400).send ('Apenas números válidos');
  }

  if (divisaoDois === 0) {
    return res.status(400).send('Você não pode dividir por 0');
  }

  const resultado = divisaoUm / divisaoDois;
  res.send(`Resultado da divisão: ${resultado}`);
});


app.listen(PORT, ()=> {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
