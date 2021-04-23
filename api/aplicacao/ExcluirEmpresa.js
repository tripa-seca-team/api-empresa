module.exports = ({EmpresaRepositorio}) =>
  async (id) => {
    await EmpresaRepositorio.excluir(id)
  }