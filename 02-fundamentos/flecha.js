let saludar = nombre => `Hola ${nombre}`;

let sumar = (a, b) => a + b;

console.log(sumar(10, 20));
console.log(saludar('JUAN CARLOS'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());