import express from "express";
import Produto from "../models/produto";
import RepositoryProdutos from "../repositories/produtos";

const routerProdutos= express.Router()

routerProdutos.get('/produtos', (req,res)=>{
    RepositoryProdutos.lerTodosProdutos((produtos: Produto[]) => {
        res.json(produtos)
    })
    
})

routerProdutos.get('/produtos/:id', (req, res) => {
    const id: number =+req.params.id
    RepositoryProdutos.lerProduto(id, (produtos) => {
        res.json(produtos)
    })
})

export default routerProdutos