'use strict'

let getNombre = async () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Juancarlos');
        }, 3000);
    });
};

let saludo = async () => {

    let nombre = await getNombre();

    return `Hola ${nombre}`;
}

saludo().then(nombre => {
    console.log(nombre)
}).catch(e => {
    console.log('Error async' + e);
});