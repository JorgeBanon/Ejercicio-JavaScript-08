function verdadero() {
    return true;
};

let resultado = verdadero();
console.log(resultado);


function temporizador() {
    console.log("Hola soy una promesa");
}

setTimeout(temporizador, 5000)

function evenGen() {
    let id = 0;
    while(true) {
        console.log(id * 2);
        id++;
        if (id > 10) {
            return;
        };
    };
};

evenGen();


