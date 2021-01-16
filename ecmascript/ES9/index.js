const obj = {
    name: 'juan',
    age: 12,
    conunty: 'CML'
};

let { conunty, ...all } = obj;
console.log(all);

const obj = {
    name: 'juan',
    age: 12,
}

const obj1 = {
    ...obj,
    contry: 'CML'
}
console.log(obj1);



const helloWorld = () => {
    return new Promise((resolve, reject) => {
    (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'))

// Programa de (Fechas)
    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = regexData.exec('2021-01-10');
    const year = match[1]
    const month = match[2]
    const day = match[3]

    console.log(year, month, day);




