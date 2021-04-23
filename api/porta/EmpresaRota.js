const express = require('express')
const router = express.Router()
const {body, param} = require('express-validator')

module.exports = (container) => {
  const controlador = container.resolve('EmpresaControlador')
  
  router.get('/', controlador.consultar)

  router.post(
    '/',
    body('razaoSocial')
      .not()
      .trim()
      .isEmpty()
      .withMessage('Favor informar Razão Social'),
    body('nomeFantasia')
      .not()
      .trim()
      .isEmpty()
      .withMessage('Favor informar Nome Fantasia'),
     body('cnpj')
      .not()
      .trim()
      .isEmpty()
      .withMessage('Favor informar CNPJ'),
    body('fundacao')
      .not()
      .trim()
      .isEmpty()
      .withMessage('Favor informar Fundação da Empresa'),
    body('endereco')
      .not()
      .trim()
      .isEmpty()
      .withMessage('Favor informar Endereço'),
    body('contatos')
      .not()
      .trim()
      .isEmpty()
      .withMessage('Favor informar Telefones de contato'),         

    controlador.inserir
  )

  router.delete(
    '/:id',
    param('id').not().isEmpty(),
    controlador.excluir
  )
  
  router.put('/:id', controlador.alterar)

  return router
}