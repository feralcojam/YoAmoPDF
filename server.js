const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")
const app = express()

const port = 3001

app.use(express.json())
app.use(cors())

// config de BD
const db = mysql.createConnection({
    host: "localhost",
    database: "cargapdf",
    user: "root",
    password: "12345"
})

// conexión con BD
db.connect(function(err) {
    if (err) {
        throw err
    } else {
        console.log("Conexión exitosa")
    }
})

// validacion login
app.post("/login", (req, res) => {
    const { username, password } = req.body

    // buscar usuario
    const query = "select * from usuarios where username = ? and password = ?"
    db.query(query, [username, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Error en el server" })
        }

        if (results.length > 0) {
            res.json({ message: "Login con éxito", user: results[0] })
        } else {
            res.status(401).json({ error: "Credenciales incorrectas" })
        }
    })
})

app.listen(3001, () => {
    console.log(`Server en http://localhost:${port}`)
})