const express = require('express');
const app = express();
const PORT = 8081;

app.get("/calculadora", (req, res)=>{
  try {
    const {operacao} = req.query;
    const {numUm} = req.query;
    const {numDois} = req.query;

    const {numeroUm} = parseFloat(numUm);
    const {numeroDois} = parseFloat(numDois);

    if (isNaN(numeroUm) || isNaN(numeroDois)){
      return res.send("Coloque números válidos");
    }

    let resultado;

    if (operacao === "soma"){
      resultado = numeroUm+numeroDois;
    } else if (operacao === "subtracao"){
      resultado = numeroUm - numeroDois;
    } else if (operacao === "multiplicacao"){
      resultado = numeroUm*numeroDois;
    } else if (operacao === "divisao"){
      if (numeroDois === 0) 
        return res.send("Não pode dividir por 0");
      resultado = numeroUm / numeroDois;
    } else {
      return res.send("Erro");
    }

    res.send(`Resultado:${resultado}`);
  } catch (error) {
    res.status(500).send("Erro no servidor.");
  }
});

app.listen(PORT, ()=>{
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});