const Empresa = require('../dominio/Empresa')

module.exports = ({EmpresaRepositorio}) => 
  async (razaoSocial, nomeFantasia, cnpj, fundacao, endereco, contatos) => {
    const empresa = new Empresa(razaoSocial, nomeFantasia, cnpj, fundacao, endereco, contatos)
    return await EmpresaRepositorio.inserir(empresa)
  }