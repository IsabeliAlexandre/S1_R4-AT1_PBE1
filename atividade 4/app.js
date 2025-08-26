const express = require("express");
const app = express();
const PORT = 8081;

app.get("/ano/:ano", (req, res)=>{
  const {ano} = parseInt(req.params.ano);

  let resultado;
  if ((ano % 4 === 0 && ano % 100|| ano % 100 === 0) || (ano % 400 === 0)){
    resultado=(`O ano é bissexto`);
  } else {
    resultado=(`O ano não é bissexto`);
  }

  res.send(resultado);
});

app.listen(PORT, ()=>{
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});