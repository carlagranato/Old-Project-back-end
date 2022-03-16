import database from "./database"
import Categoria from "../models/categoria"

const repositoryCategorias = {
    lerTodas: (callback: (categorias: Categoria[]) => void) => {

            const sql = 'SELECT * FROM categorias'

            const allCallback = (err: Error | null, rows: Categoria[]) => {
                callback(rows)
            }

                    database.all(sql, allCallback)
            
        
            },

            lerCategoria: (id: number, callback: (categoria: Categoria) => void) => {
                const sql = `SELECT * FROM produtos WHERE id = ${id}`
            console.log(sql)
    
            const allCallback = (err: Error | null, row: Categoria) => {
                    callback(row)
                }
    
             database.get(sql, allCallback)  
        
    },
    
}



export default repositoryCategorias