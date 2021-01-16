// Object entries deveule los valores de una matriz.

const data ={
    front:'Juan',
    back: 'Juan_Mi',
    design: 'Lina',
};

// Tranformar este objeto en una matriz. 
const entries = Object.entries(data);
console.log(entries);

// Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length);


// Objetc Values: Me devuelve los valores de un objeto a un arreglo. 

const data= {
    front:'Juan',
    back: 'Juan_Mi',
}
const values = Object.values(data);
console.log(values);

// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
// Podría servir del lado del front , para mostrar una estructura de elementos.

const string ='hello';
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi'
console.log(string.padEnd(12,'hi')) // Se añade al final la palabra 'hi'
console.log('food'.padEnd(12, '----'))


// Trailing comas, nos permite asignar elementos al objeto mediante comas.

const data= {
    front:'Juan', // Puede existir
    back: 'Juan_Mi'
}

// setTimeout = Despues de sierto tiempo

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject (new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anothotFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello)
    } catch (error) {
        console.log('hola troy tienes un error');
    }
}

anothotFunction();

