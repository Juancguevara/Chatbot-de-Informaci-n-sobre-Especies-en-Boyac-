const fs = require("fs");

let especies = {};

function cargarDatos() {
    try {
        especies = JSON.parse(fs.readFileSync("especies.json", "utf-8"));
    } catch (error) {
        console.log("Error al cargar los datos", error);
    }
}

function obtenerEspecies() {
    return especies;
}

module.exports = { cargarDatos, obtenerEspecies };