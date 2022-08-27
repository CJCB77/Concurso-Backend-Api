const db = require('../db/connection');

const getEstudiantes = async (req, res) => {
    try{
        const query = `SELECT * FROM estudiante`;
        const result = await db.query(query);
        res.json(result.rows);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

const getEstudiante = async (req, res) => {
    try{
        const {id} = req.params;
        const query = `SELECT * FROM estudiante WHERE id = $1`;
        const result = await db.query(query, [id]);
        res.json(result.rows[0]);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

const updateEstudiante = async (req, res) => {
    try{
        const {id} = req.params;
        const {cedula,nombres,apellidos,tema,fase_id,nota1,nota2,nota3,nota_final,foto,correo} = req.body;
        const query = `UPDATE estudiante SET cedula = $1, nombres = $2, apellido = $3, tema =$4, fase_id = $5, nota1 = $6, nota2 = $7
            nota3 = $8, nota_final = $9, foto = $10, correo = $11 
            WHERE id = $12 RETURNING *`;
        const result = await db.query(query, [cedula,nombres,apellidos,tema,fase_id,nota1,nota2,nota3,nota_final,foto,correo,id]);
        res.json(result.rows[0]);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

const createEstudiante = async (req, res) => {
    try{
        const {cedula,nombres,apellidos,tema,fase_id,nota1,nota2,nota3,nota_final,foto,correo} = req.body;
        const query = `INSERT INTO estudiante(cedula,nombres,apellidos,tema,fase_id,nota1,nota2,nota3,nota_final,foto,correo)  
            VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
            RETURNING *`;
        const result = await db.query(query, [cedula,nombres,apellidos,tema,fase_id,nota1,nota2,nota3,nota_final,foto,correo]);
        res.json(result.rows[0]);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getEstudiantes,
    getEstudiante,
    updateEstudiante,
    createEstudiante
}