const express = require('express');
const db = require('./db/connection');
//Add cors
const cors = require('cors');

const verifyToken = require('./validation/verifyToken');
const transporter = require('./utilities/mailer');

const app = express();
//Middlewares
app.use(express.json());
app.use(cors());


//Routes 
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);


//Use env variables
require('dotenv').config();



app.get('/', (req, res) => {
    res.json({Message: 'API del Concurso'});
    });


const startApp = async () => {
    try{
        await db.connect()
            .then( () => console.log('DB connected'))
            .then( () => app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`)))
            .catch( err => console.log(err));
    }catch(err){
        console.log(err);
    }
}

startApp();