const {RESOLVER} = require('awilix')
const {Schema} = require('mongoose')

const empresaSchema = new Schema({
  razaoSocial: {
    type: String,
    index: true,
    required: [true, 'Razão Social é obrigatorio']
  },
  nomeFantasia: {
    type: String,
    index: true,
    required: [true, 'Nome Fantasia é obrigatorio']
  },
  cnpj: {
    type: String,
    index: true,
    required: [true, 'CNPJ é obrigatorio']
  },
  fundacao: {
    type: String,
    index: true,
    required: [true, 'Fundação é obrigatorio']
  },
  endereco: {
    type: String,
    index: true,
    required: [true, 'Endereço é obrigatorio']
  },
  contatos: {
    type: String,
    index: true,
    required: [true, 'Contatos é obrigatorio']
  },
})

const empresaModel = ({mongoose}) => mongoose.model('empresa', empresaSchema)

module.exports = empresaModel

empresaModel[RESOLVER] = {
  name: 'EmpresaModel'
}