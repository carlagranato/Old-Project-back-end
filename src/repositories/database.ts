import sqlite3 from "sqlite3"

const DBSOURCE = 'db.sqlite'


const SQL_CATEGORIAS_CREATE =`
CREATE TABLE categorias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT
)`

const SQL_PRODUTOS_CREATE =`
CREATE TABLE produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    preco REAL,
    descricao TEXT,
    imagem TEXT,
    idCategoria INTEGER, 
    FOREIGN KEY (idCategoria) references categorias (id)

)`

const SQL_DESCRICOES_CREATE =`
CREATE TABLE descricoes (
    id INTEREGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    preco REAL,
    descricao TEXT,
    imagem TEXT,
    idCategoria INTEGER,
    FOREIGN KEY (idProduto) references categorias (id)

)`

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Base de Dados criada com sucesso')

        database.run(SQL_CATEGORIAS_CREATE, (err) => {
            if (err) {
                // Possivelmente a tabela ja foi criada
                
            } else {
                console.log('Tabela categorias criada com sucesso.')
            }
        })
        database.run(SQL_PRODUTOS_CREATE, (err) => {
            if (err) {
                // Possivelmente a tabela ja foi criada
                
            } else {
                console.log('Tabela produtos criada com sucesso.')
            }
        })
    }
})
export default database 
