//importando o pacote
const mongoose = require ('mongoose');
//definindo o "schema"
//note a semelhança com recursos de bases relacionais
const clienteSchema = mongoose.Schema ({
nome: {type: String, required: true},
fone: {type: String, required: false, default: '00000000'},
email: {type: String, required: true},
senha:{type:String,require:true},
endereco:{type:String,require:true},
cidade:{type:String,require:true},
estado:{type:String,require:true},
bairro:{type:String,require:true},

});
//criamos o modelo associado ao nome Cliente e exportamos
//tornando acessível para outros módulos da aplicação
module.exports = mongoose.model('Cliente', clienteSchema);
