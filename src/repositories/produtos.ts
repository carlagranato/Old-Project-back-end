import Produto from '../models/produto'
import Item from '../models/produto'
import database from './database'

const RepositoryProdutos = {
    criar: (produto: Produto, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO produtos (nome, descricao) VALUES (?, ?)'
        const params = [produto.nome, produto.descricao]
        database.run(sql, params, function(_err) {
            callback(this?.lastID)
        })
    },

    lerTodosProdutos: (callback: (produtos: Produto[]) => void) => {

            const sql = 'SELECT * FROM produtos'

            const allCallback = (err: Error | null, rows: Produto[]) => {
                callback(rows)
            }

                    database.all(sql, allCallback)
            

            },

    lerProdutosporCategoria: (idCategoria: number, callback: (produtos: Produto[]) => void) => {

        const sql = `SELECT * FROM produtos WHERE idCategoria = ${idCategoria}`
        console.log(sql)

        const allCallback = (err: Error | null, rows: Produto[]) => {
                callback(rows)
            }

         database.all(sql, allCallback)
    },

        lerProduto: (idProduto: number, callback: (produto: Produto) => void) => {
            const sql = `SELECT * FROM produtos WHERE id = ${idProduto}`
        console.log(sql)

        const allCallback = (err: Error | null, row: Produto) => {
                callback(row)
            }

         database.get(sql, allCallback)
    },          
}


export default RepositoryProdutos 
