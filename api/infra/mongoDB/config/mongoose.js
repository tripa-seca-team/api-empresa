const { RESOLVER, Lifetime } = require('awilix')

const URL = 'mongodb+srv://projetointegrador:SenhaCompartilhada5@cluster0.j2lbl.mongodb.net/empresaDB?retryWrites=true&w=majority'

const mongoose = require('mongoose');

const database = () => {
  mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true});
  return mongoose
}

module.exports = database

database[RESOLVER] = {
  name: 'mongoose',
  lifetime: Lifetime.SINGLETON,
}