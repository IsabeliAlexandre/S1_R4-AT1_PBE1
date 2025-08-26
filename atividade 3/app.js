const express = require('express');
const app = express();
const PORT = 8081;

app.get("/operacao/:tipo", (req, res)=>{

  const tipo = req.query.tipo;  
  const { numUm, numDois } = req.query; 

  const numeroUm = parseFloat(numUm);
  const numeroDois = parseFloat(numDois);

if (isNaN(numeroUm) || isNaN(numeroDois)){
   return res.send("Coloque números válidos");
}
   
 let resultado;
 let operacao;
    if (operacao === "soma"){
      resultado = numeroUm+numeroDois
    } else if (operacao === "subtracao"){
      resultado = numeroUm-numeroDois
    } else if (operacao === "multiplicacao") {
      resultado = numeroUm * numeroDois
    } else if (operacao === "divisao"){
      if (numeroDois === 0) 
        return res.send("Não pode dividir por 0!!!");
      resultado = numeroUm / numeroDois
    } else {
      return res.send("Operação inválida");
    }

    res.send(`Resultado: ${resultado}`);
 
});

app.listen(PORT, ()=>{
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});