const readline = require("readline");
const { mostrarInventario, mostrarZonas, buscarEspecie } = require("./opciones");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n--- Menú de Opciones ---");
    console.log("1. Ver inventario de especies");
    console.log("2. Ver zonas de especies");
    console.log("3. Buscar información de una especie");
    console.log("4. Salir");
    
    rl.question("Selecciona una opción: ", (opcion) => {
        switch (opcion) {
            case "1":
                mostrarInventario(mostrarMenu);
                break;
            case "2":
                mostrarZonas(mostrarMenu);
                break;
            case "3":
                buscarEspecie(mostrarMenu);
                break;
            case "4":
                console.log("Saliendo del programa. ¡Hasta luego!");
                rl.close();
                break;
            default:
                console.log("Opción no válida.");
                mostrarMenu();
        }
    });
}

module.exports = { mostrarMenu, rl };