const Empresa = require('../dominio/Empresa')

module.exports = ({EmpresaRepositorio}) => 
    async (id, razaoSocial, nomeFantasia, cnpj, fundacao, endereco, contatos) => {
      const empresa = new Empresa(razaoSocial, nomeFantasia, cnpj, fundacao, endereco, contatos)
      return await EmpresaRepositorio.alterar(id, empresa)
    }