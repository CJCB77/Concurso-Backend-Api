const db = require('../db/connection');

const getUsuarios = async (req, res) => {
    try{
        const query = `SELECT * FROM usuarios`;
        const result = await db.query(query);
        res.json(result.rows);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

const getUsuario = async (req, res) => {
    try{
        const {id} = req.params;
        const query = `SELECT * FROM usuarios WHERE id = $1`;
        const result = await db.query(query, [id]);
        res.json(result.rows[0]);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

const updateUsuario = async (req, res) => {
    try{
        const {id} = req.params;
        const {username,password,rol} = req.body;
        const query = `UPDATE usuarios SET username = $1, password = $2, 
            rol = $3 WHERE id = $4 RETURNING *`;
        const result = await db.query(query, [username,password,rol,id]);
        res.json(result.rows[0]);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

const deleteUsuario = async (req, res) => {
    try{
        const {id} = req.params;
        const query = `DELETE FROM usuarios WHERE id = $1 RETURNING *`;
        const result = await db.query(query, [id]);
        res.json(result.rows[0]);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getUsuarios,
    getUsuario,
    updateUsuario,
    deleteUsuario
}
