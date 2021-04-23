const { RESOLVER, Lifetime } = require('awilix')

const EmpresaRepositorio = ({EmpresaModel}) => ({
  inserir: async (empresa) => {    
    const empresaModel = new EmpresaModel(empresa);
    
    const novoEmpresa = await empresaModel.save()
    console.log('Novo empresa...', novoEmpresa)

    return novoEmpresa
  },

  listarTodos: async () => {
    return await EmpresaModel.find({}, null, {limit: 100})
  },

  excluir: async (id) => {
    const empresa = await EmpresaModel.findByIdAndDelete(id)
  },

  alterar: async (id, empresa) => {
    const antigoEmpresa = await EmpresaModel.findByIdAndUpdate(id, empresa)
    console.log('Antigo empresa: ', antigoEmpresa)
  },

})

module.exports = EmpresaRepositorio

EmpresaRepositorio[RESOLVER] = {
  name: 'EmpresaRepositorio',
  lifetime: Lifetime.SINGLETON
}