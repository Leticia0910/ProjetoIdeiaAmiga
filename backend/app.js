const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");
const Cliente = require("./models/cliente");

mongoose
  .connect(
    'mongodb+srv://Projeto_2021:projeto21@cluster0.un0lx.mongodb.net/Projeto_2021?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log("Conexão OK");
  })
  .catch(function(e) {
    console.log(e);
  });
    
  const get = async () => {
    return Promise.reject('Oops!').catch(err => {
      throw new Error(err);
    });
  };
  
 
 
app.use((req, res, next) => {res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/clientes", (req, res, next) => {
  const cliente = new Cliente({
    nome: req.body.nome,
    fone: req.body.fone,
    email: req.body.email,
    senha:req.body.senha,
    endereco:req.body.endereco,
    cidade:req.body.cidade,
    estado:req.body.estado,
    bairro:req.body.bairro


  });

app.get("/api/clientes", (req, res, next) => {
  Cliente.find().then((documents) => {
    console.log(documents);
    res.status(200).json({
      mensagem: "Tudo OK",
      clientes: documents,
    });
  });
});
cliente.save().then((clienteInserido) => {
  res.status(201).json({
    mensagem: "Cliente inserido",
    id: clienteInserido._id,
  });
});
});



app.delete("/api/clientes/:id", (req, res, next) => {
  Cliente.deleteOne({ _id: req.params.id }).then((resultado) => {
    console.log(resultado);
    res.status(200).json({ mensagem: "Cliente removido" });
  });
});

module.exports = app;