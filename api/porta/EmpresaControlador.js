const {validationResult} = require('express-validator')

module.exports = ({CriarEmpresa,ConsultarEmpresa, ExcluirEmpresa, AlterarEmpresa}) => ({
  inserir : async (req, res) => {

    const erros = validationResult(req)

    if(!erros.isEmpty()) {
      return res.status(400).json({erros: erros.array()})
    }    

    const {razaoSocial, nomeFantasia, cnpj, fundacao, endereco, contatos} = req.body
    try {
      const empresa = await CriarEmpresa(razaoSocial, nomeFantasia, cnpj, fundacao, endereco, contatos)
      res.json(empresa)
    } catch(err) {
      res.status(400).json(`Erro ao tentar gravar empresa ${err.message}`)
    }

  },
  consultar : async (req, res) => {
    const {razaoSocial, nomeFantasia, cnpj, fundacao, endereco, contatos} = req.query

    const empresa = await ConsultarEmpresa(razaoSocial, nomeFantasia, cnpj, fundacao, endereco, contatos)
    res.json(empresa)
  },

  excluir : async (req, res) => {
    const erros = validationResult(req)

    if(!erros.isEmpty()) {
      return res.status(400).json({erros: erros.array()})
    }    

    
    console.log('Chamou o excluir')
    const id = req.params.id
    await ExcluirEmpresa(id)
    res.json({mensagem: 'Empresa excluida com sucesso'})
  },

  alterar : async (req, res) => {
    const id = req.params.id
    const {razaoSocial, nomeFantasia, cnpj, fundacao, endereco, contatos} = req.body

    const empresa = await AlterarEmpresa(id, razaoSocial, nomeFantasia, cnpj, fundacao, endereco, contatos)
    res.json(empresa)
  }

})