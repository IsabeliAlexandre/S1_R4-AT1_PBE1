const express = require("express");
const app = express();
const PORT = 8081;

app.get("/saudacao/:nome", (req, res)=>{
  const {nome} = req.params.nome;         
  const {hora} = parseInt(req.query.hora); 

  let saudacao;
  let nomeUsuario

  if (hora <12){
    saudacao = (`Bom dia ${nomeUsuario} tenha um bom dia`);
  } else if (hora < 18){
    saudacao =(`Boa tarde ${nomeUsuario}espero que esteja tendo uma boa tarde hoje!`);
  } else if (hora >= 19 && hora <= 23){
    saudacao = (`Boa noite ${nomeUsuario}, bons sonhos!`);
  } 

  res.send(`${saudacao}, ${nomeUsuario}!`);
});

app.listen(PORT,()=>{
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});