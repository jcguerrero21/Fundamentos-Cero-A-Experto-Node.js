let empleados = [{
        id: 1,
        nombre: 'Juan carlos'
    },
    {
        id: 2,
        nombre: 'pepe'
    },
    {
        id: 3,
        nombre: 'Jose'
    }
];

let salarios = [{
        id: 1,
        salario: 3000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    return new Promise((resolve, reject) => {
        if (!salarioDB) {
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

getEmpleado(2).then(empleado => {
    console.log('Empleado de DB', empleado)

    getSalario(empleado).then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario} €`)
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});

//promesas anidadas
getEmpleado(1).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario} €`)
}).catch(err => {
    console.log(err);
});