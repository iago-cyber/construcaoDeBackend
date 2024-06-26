const express = require ('express');
const produtosController = require('../controllers/controller_produtos.js')

const router = express.Router();

router.get("/", produtosController.listarTodos);
router.get("/:produtoId", produtosController.buscarPeloId, produtosController.exibir);
router.post("/", produtosController.validarDados, produtosController.criar);
router.put("/:produtoId", produtosController.buscarPeloId, produtosController.validarDados, produtosController.atualizar);
router.delete("/:produtoId", produtosController.buscarPeloId, produtosController.remover);


module.exports = router;