const usuario = [
    {nome:"Ana",idade:22},
    {nome:"Carlos",idade:19},
    {nome:"Beatriz",idade:25},
];
const maioresdeidade  = usuario.filter(usuario=>usuario.idade>=21);
console.log(maioresdeidade);