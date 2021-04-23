module.exports = ({EmpresaRepositorio}) => 
  async (id, razaoSocial, nomeFantasia, cnpj, fundacao, endereco, contatos) => {
    
      return await EmpresaRepositorio.listarTodos()
  }