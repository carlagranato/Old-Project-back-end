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


    ler: (id: number) => {
        const categorias: Categoria = {
            id: 1,
            nome: 'elétrodomésticos',
            idpai: null
        }

       
        return categorias
    },
    
}


export default repositoryCategorias