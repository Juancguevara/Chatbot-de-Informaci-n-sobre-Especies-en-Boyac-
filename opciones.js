const { obtenerEspecies } = require("./datos");

function mostrarInventario(callback) {
    console.log("\n--- Inventario de Especies ---");
    const especies = obtenerEspecies();
    Object.keys(especies).forEach((nombre) => {
        console.log(`- ${nombre} (${especies[nombre].categoria})`);
    });
    callback();
}

function mostrarZonas(callback) {
    console.log("\n--- Zonas de Especies ---");
    const especies = obtenerEspecies();
    Object.keys(especies).forEach((nombre) => {
        console.log(`- ${nombre}: ${especies[nombre].zona}`);
    });
    callback();
}

function buscarEspecie(callback) {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Introduce el nombre de la especie: ", (nombre) => {
        const especies = obtenerEspecies();
        if (especies[nombre]) {
            console.log("\nInformación de la Especie:");
            console.log(`- Nombre: ${nombre}`);
            console.log(`- Descripción: ${especies[nombre].descripcion}`);
        } else {
            console.log("Especie no encontrada.");
        }
        rl.close();
        callback();
    });
}

module.exports = { mostrarInventario, mostrarZonas, buscarEspecie };