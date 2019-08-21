const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('==========================='.green);
    console.log('=====Tabla================='.green);
    console.log('==========================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introudcido ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`el valor introudcido ${limite} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}