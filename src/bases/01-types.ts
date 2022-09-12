export let name = "Sebastian";
name = "Ricardo";
export const age = 18;

export const templateString = `Esto es un string 
multilinea que puede 
tener " dobles ' 
simple inyectar valores ${name} 
números ${age}`;

console.log(templateString);
