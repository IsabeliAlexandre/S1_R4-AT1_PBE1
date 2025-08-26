const express = require("express");
const app = express();
const PORT = 8081;

app.get("/imc", (req, res)=>{
  const {peso} = parseFloat(req.query.peso);
  const {altura} = parseFloat(req.query.altura);

  const imc= peso / (altura * altura);

  let resultado;
  if (imc < 18.5) {
    resultado = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25){
    resultado = "Peso normal";
  } else if (imc >= 26 && imc < 30){
    resultado = "Sobrepeso";
  } else {
    resultado = "Obesidade";
  }

   if (isNaN(peso) || isNaN(altura) || altura <= 0){
    return res.send("Coloque valores válidos");
  }

  res.send(`Seu IMC é: ${imc.toFixed(2)} ${resultado}`);
});

app.listen(PORT, ()=> {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});