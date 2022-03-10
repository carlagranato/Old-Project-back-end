import express from "express"
import Categoria from "../models/categoria"
import repositoryCategorias from "../repositories/categorias"
import RepositoryProdutos from "../repositories/produtos"



const routerCategorias = express.Router()

// Endpoint para listar todas as categorias
routerCategorias.get('/categorias' , (req,res) => {
    repositoryCategorias.lerTodas((categorias: Categoria[]) => {
        res.json(categorias)
    })
})

routerCategorias.get('/categorias/:id/produtos', (req, res) => {
    const id: number =+req.params.id
    RepositoryProdutos.lerProdutosporCategoria(id, (produtos) => {
        res.json(produtos)
    })
})
    
export default routerCategorias