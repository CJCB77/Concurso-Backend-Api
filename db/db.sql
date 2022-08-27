CREATE TABLE rol(
    id BIGSERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL
);

CREATE TABLE usuario(
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(150) NOT NULL,
    password VARCHAR(150) NOT NULL,
    rol_id BIGINT NOT NULL REFERENCES rol(id)
);

CREATE TABLE fase(
    id BIGSERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL
);

CREATE TABLE estudiante(
    id BIGSERIAL PRIMARY KEY,
    cedula VARCHAR(10) NOT NULL UNIQUE,
    nombres VARCHAR(150) NOT NULL,
    apellidos VARCHAR(150) NOT NULL,
    correo VARCHAR(150) ,
    tema VARCHAR(250) NOT NULL,
    foto VARCHAR(150),
    fase_id BIGINT NOT NULL REFERENCES fase(id),
    nota1 DECIMAL(10,2),
    nota2 DECIMAL(10,2),
    nota3 DECIMAL(10,2),
    nota_final DECIMAL(10,2)
);
